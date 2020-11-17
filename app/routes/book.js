import Route from '@ember/routing/route';

export default class BookRoute extends Route {
    async model(){
        let response = await fetch('http://localhost:3000/books');
        return response.json();
    }
}
