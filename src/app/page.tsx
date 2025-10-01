import { Button } from "@ui/button";
import { Input } from "@ui/input";

export default function HomePage() {
    return (
        <section>
            <h1>Hello World</h1>
            <Button>
                Criar agora
            </Button>
            <Button variant="secondary">
                Criar agora
            </Button>
            <Button variant="outline">
                Criar agora
            </Button>

            <Input placeholder="Digite o nome do conteúdo">
                Titulo do link
            </Input>
        </section>
    )
}