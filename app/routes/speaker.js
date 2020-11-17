import Route from '@ember/routing/route';

export default class SpeakerRoute extends Route {
    async model(){
        let response = await fetch('http://localhost:3000/speakers');
        return response.json();
    }
}
