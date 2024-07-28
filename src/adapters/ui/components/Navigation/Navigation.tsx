import { useFavoriteCharacters } from '../../../../infrastructure/contexts/FavoriteCharacters/FavoriteCharactersContext';
import {
    NavigationContainer,
    NavigationFavorites,
    NavigationFavoritesIcon,
    NavigationLogo,
    NavigationLogoWrapper,
} from './Navigation.styles';

export function Navigation() {
    const { favorites } = useFavoriteCharacters();

    return (
        <NavigationContainer>
            <NavigationLogoWrapper href="/">
                <NavigationLogo src="/logo.svg" alt="Characters list" />
            </NavigationLogoWrapper>
            <NavigationFavorites href="/favorites">
                <NavigationFavoritesIcon src="/heart-filled.svg" alt="Favorite characters list" />
                <div>{favorites.length}</div>
            </NavigationFavorites>
        </NavigationContainer>
    );
}
