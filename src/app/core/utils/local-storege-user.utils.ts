export class LocalStorageUserUtils {

    public getItem(){
        let getItem = localStorage.getItem('user')
        return JSON.parse(getItem)
    }

    public setItem(item){
        localStorage.setItem('user', JSON.stringify(item))
    }

    public removeItem(){
        localStorage.removeItem('user')
    }

    public isItem():boolean{
        let getItem = localStorage.getItem('user')

        if(getItem == null){
          return false
        }
    
        if(getItem.length > 10){
           const item = JSON.parse(getItem)
           if(item.email && item.uid){
                return true
           }
        }

        return false
    }
}