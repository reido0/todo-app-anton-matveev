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
    SWITCHER_TEXT,
} from '../../constants';

const Header = ({
    logout,
    setTheme,
    themeVariant,
    userData,
}) => {
    const [showLogOut, setShowLogOut] = useState(false);
    const isLightTheme = themeVariant === THEME.LIGHT;

    const handleSwitcherClick = useCallback(() => {
        if (isLightTheme) {
            setTheme(THEME.DARK);
        } else {
            setTheme(THEME.LIGHT);
        }
    }, [
        isLightTheme,
        setTheme,
    ]);

    return (
        <Container>
            <SwitcherContainer onClick={handleSwitcherClick}>
                <Switcher isActive={isLightTheme}>
                    <SwitcherToggler />
                </Switcher>
                {isLightTheme ? SWITCHER_TEXT.DARK : SWITCHER_TEXT.LIGHT}
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
