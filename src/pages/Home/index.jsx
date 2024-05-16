import { FiPlus, FiSearch } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote} from './style'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'

export function Home() {
    return(
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="todos" isActive /> </li>
                <li><ButtonText title="react" /> </li>
                <li><ButtonText title="node" /> </li>
            </Menu>

            <Search>
                <Input placeholder="pesquisar titulo" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags:[
                            {id: '1', name:'React'},
                            {id: '2', name:'Notes'}
                        ] 
                        }}/>
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}