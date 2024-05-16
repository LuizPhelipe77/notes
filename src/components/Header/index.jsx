import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/luizphelipe77.png" alt="foto usuario" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Luiz Phelipe</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}