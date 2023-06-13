
let arr: Array<string | number>= [];

arr =[0, 1, 'jh']


function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
  }

  const toMerge = {
    name: 'Max'
  };

  const toMerge2 ={
    age: 25
  }
  const merged1 = merge(toMerge, toMerge2);

  console.log(merged1.name);
  

type Per = {
    name: string;
  }
  
  type AdditionFields = {
    age: number;
  }
  
  const merged2 = merge<Per, AdditionFields>({name: 'Alisa'}, {age: 28});

  console.log(merged2);

function extractValue<T extends object, U extends keyof T> (obj:T, key:U) {
    return obj[key];
  }
  
  console.log(extractValue({name: 'Sergei'}, 'name'));

class StoreClass<T> {
    private data: T[] = [];
  
    addItem (item:T):void {
      this.data.push(item);
    }
  
    getItems (): T[] {
      return this.data;
    }
  }


  const store = new StoreClass<string>();
  store.addItem("test")

const arr2: Readonly<string[]>= ['kjhkj'];


function getPromise() :Promise<Array< string | number>> {
  return new Promise((resolve)=> {resolve (['Text', 50])})
}

getPromise ().then((data)=>{console.log(data);})

type AllType ={
  name: string,
  position: number;
  color: string;
  weight: number
}

function compare(top: Pick<AllType, 'name'| 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
} 



console.log(compare({color: 'black', name: 'Alex'}, {position: 50, weight: 50}));

function merge2<T  extends object, U extends object>(objA: T, objB: U ): object {
  return Object.assign(objA, objB)
}


class Component<T> {
  constructor(public props:T) {   

  }
}

interface IProps  {
title: string
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

