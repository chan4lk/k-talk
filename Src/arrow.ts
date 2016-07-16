class Presenter {
    topics: string[];
    constructor(topics: string[]) {
        this.topics = topics;
    }
    present() {  
       
            setTimeout(()=>{
                alert(this.topics[0]);
            }, 1000);
           
    }
}
var topics = ['Getting Started with Typescript', 'Getting Started with Angular 2'];
var presenter = new Presenter(topics);
presenter.present();
