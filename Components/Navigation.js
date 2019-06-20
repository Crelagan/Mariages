// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from "../Page/Home/Home";
import Dashboard from "../Page/Dashboard/Dashboard";
import Accomodation from "../Page/Accomodation/Accomodation";
import Acknoledgement from "../Page/Acknoledgement/Acknoledgement";
import Contact from "../Page/Contact/Contact";
import CarSharing from "../Page/CarSharing/CarSharing";
import Entourage from "../Page/Entourage/Entourage";
import EventDetail from "../Page/EventDetail/EventDetail";
import MoveTo from "../Page/MoveTo/MoveTo";
import Planning from "../Page/Planning/Planning";
import Profil from "../Page/Profil/Profil";
import Search from "../Page/Search/search";
import Tourism from "../Page/Tourism/Tourism";
import Announcement from "../Page/Announcement/Announcement";
import Photo from "../Page/Photo/Photo";
import Login from "../Page/Login/Login";

const AppStackNavigator = createStackNavigator({
    Login: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Login,
        navigationOptions: {
            title: 'login'
        }
    },
    Home: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Home,
        navigationOptions: {
            title: 'Bienvenue'
        }
    },
    Dashboard: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard'
        }
    },
    Announcement: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Announcement,
        navigationOptions: {
            title: 'Faire-Part'
        }
    },
    Accomodation: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Accomodation,
        navigationOptions: {
            title: 'Logement'
        }
    },
    Acknoledgement: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Acknoledgement,
        navigationOptions: {
            title: 'Remerciement'
        }
    },
    CarSharing: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: CarSharing,
        navigationOptions: {
            title: 'Covoiturage'
        }
    },
    Contact: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Contact,
        navigationOptions: {
            title: 'Contact'
        }
    },
    Entourage: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Entourage,
        navigationOptions: {
            title: 'Temoins'
        }
    },
    EventDetail: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: EventDetail,
        navigationOptions: {
            title: 'Evenement'
        }
    },
    MoveTo: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: MoveTo,
        navigationOptions: {
            title: 'Navigation'
        }
    },
    Photo: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Photo,
        navigationOptions: {
            title: 'Galerie Photo'
        }
    },
    Planning: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Planning,
        navigationOptions: {
            title: 'Agenda'
        }
    },
    Profil: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Profil,
        navigationOptions: {
            title: 'Profil'
        }
    },
    Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Search,
        navigationOptions: {
            title: 'Recherche'
        }
    },
    Tourism: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Tourism,
        navigationOptions: {
            title: 'Tourisme'
        }
    },
})

export default createAppContainer(AppStackNavigator)