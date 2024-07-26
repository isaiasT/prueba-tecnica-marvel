import { NavigationContainer, NavigationFavorites, NavigationFavoritesLogo, NavigationLogo } from './Navigation.styles';

function Navigation() {
    return (
        <NavigationContainer>
            <a href="/">
                <NavigationLogo src="/logo.svg" alt="Characters list" />
            </a>
            <NavigationFavorites href="/favorites">
                <NavigationFavoritesLogo src="/heart-filled.svg" alt="Favorite characters list" />
                <div>3</div>
            </NavigationFavorites>
        </NavigationContainer>
    );
}

export default Navigation;
