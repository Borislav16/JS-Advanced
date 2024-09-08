function constructionCrew(worker){
    if(worker.dizziness){
        worker.levelofHydrated += worker.weight * worker.expirience * 0.1;
        worker.dizziness = !worker.dizziness;
    }

    return worker
}
