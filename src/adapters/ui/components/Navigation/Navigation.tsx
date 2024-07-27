import {
    NavigationContainer,
    NavigationFavorites,
    NavigationFavoritesLogo,
    NavigationLogo,
    NavigationLogoWrapper,
} from './Navigation.styles';

function Navigation() {
    return (
        <NavigationContainer>
            <NavigationLogoWrapper href="/">
                <NavigationLogo src="/logo.svg" alt="Characters list" />
            </NavigationLogoWrapper>
            <NavigationFavorites href="/favorites">
                <NavigationFavoritesLogo src="/heart-filled.svg" alt="Favorite characters list" />
                <div>3</div>
            </NavigationFavorites>
        </NavigationContainer>
    );
}

export default Navigation;
