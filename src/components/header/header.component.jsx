import React, {
    useCallback,
    useState,
} from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Container,
    LogOutButton,
    Switcher,
    SwitcherContainer,
    SwitcherToggler,
    UserButton,
    UserName,
} from './header.styles';
import {
    AVATAR_URL,
    THEME,
} from '../../constants';

const Header = ({
    logout,
    setTheme,
    themeVariant,
    userData,
}) => {
    const [showLogOut, setShowLogOut] = useState(false);

    const handleSwitcherClick = useCallback(() => {
        if (themeVariant === THEME.LIGHT) {
            setTheme(THEME.DARK);
        } else {
            setTheme(THEME.LIGHT);
        }
    }, [
        setTheme,
        themeVariant,
    ]);

    return (
        <Container>
            <SwitcherContainer onClick={handleSwitcherClick}>
                <Switcher isActive={themeVariant === THEME.LIGHT}>
                    <SwitcherToggler />
                </Switcher>
                Switch to dark mode
            </SwitcherContainer>
            {userData && (
                <UserButton
                    onMouseEnter={() => setShowLogOut(true)}
                    onMouseLeave={() => setShowLogOut(false)}
                >
                    <Avatar
                        src={AVATAR_URL}
                        alt={userData.userName}
                    />
                    <UserName>{userData.userName}</UserName>
                    {showLogOut && (
                        <LogOutButton onClick={logout}>Logout</LogOutButton>
                    )}
                </UserButton>
            )}
        </Container>
    );
};

Header.propTypes = {
    logout: PropTypes.func,
    setTheme: PropTypes.func,
    themeVariant: PropTypes.string,
    userData: PropTypes.object,
};

export default React.memo(Header);
