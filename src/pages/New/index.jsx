import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea} from '../../components/Textarea'
import { NoteItem} from '../../components/NoteItem'
import { Section} from '../../components/Section'
import { Button} from '../../components/Button'

import { Container, Form } from './style'


export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Titulo" />
                    <Textarea placeholder="Observações" />

                    <Section title="Links uteis" >
                        <NoteItem value="https://" />
                        <NoteItem  isNew placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tegs'>
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Nova teg" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    );
}