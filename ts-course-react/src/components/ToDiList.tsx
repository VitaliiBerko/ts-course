import React from 'react';

interface IItems {
    id: string,
    title: string
}

interface IProps {
    toDos: IItems[]
}

interface IState {
    count: number
}
class ToDoList extends React.Component<IProps, IState>{

    stateHandler() {
        this.setState(({count})=>{
            count+=1
        })
    }
    render(): React.ReactNode {
         return 
    }
}

export default ToDoList