import { useEffect, useState } from "react";
import { Contador } from "../../components/Contador";

type TipoUsuarioGit = {
    login: string;
    id: number;
    avatar_url: string;
};

export default function Home() {
    const [usuarios, setUsuarios] = useState<TipoUsuarioGit[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        document.title = "Home";
        const controller = new AbortController();

        async function loadingData() {
            try {
                const response = await fetch("https://api.github.com/users", {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error("Não foi possível carregar os usuários. Tente novamente mais tarde.");
                }

                const data: TipoUsuarioGit[] = await response.json();
                if (!controller.signal.aborted) {
                    setUsuarios(data);
                }
            } catch (error) {
                if (!controller.signal.aborted) {
                    setErro(error instanceof Error ? error.message : "A listagem falhou.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setCarregando(false);
                }
            }
        }

        void loadingData();
        return () => controller.abort();
    }, []);

    return (
        <main>
            <h2>Home</h2>
            <section aria-labelledby="usuarios-titulo">
                <h3 id="usuarios-titulo">Usuários do GitHub</h3>
                {carregando && <p role="status">Carregando usuários...</p>}
                {erro && <p role="alert">{erro}</p>}
                {!carregando && !erro && usuarios.length === 0 && (
                    <p>Nenhum usuário encontrado.</p>
                )}
                <ul>
                    {usuarios.map((usuario) => (
                        <li key={usuario.id}>
                            <img src={usuario.avatar_url} alt="" width={40} height={40} />
                            <span>{usuario.id} - {usuario.login}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <Contador />
        </main>
    );
}
