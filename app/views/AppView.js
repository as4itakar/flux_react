import React from "react";
 
class AppView extends React.Component{
 
    constructor(props){
        super(props);
        this.state = {newItem: ""};
         
        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onClickk = this.onClickk.bind(this);


    }
    onInputChange(e){
        this.setState({newItem:e.target.value});
    }
    onClick(e){
        if(this.state.newItem){
            this.props.onAddItem(this.state.newItem);
            this.setState({newItem:" "});
        }
    }
    onClickk(e){
        console.log(this.props.phones);
    }

    render(){

        let remove = this.props.onRemoveItem;
        let edit = this.props.onEditItem;
        return <div> 
                <input type="text" value={this.state.newItem} onChange={this.onInputChange} />    
                <button onClick={this.onClick}>Добавить</button>
                <button onClick={this.onClickk}>Добавить</button>


            <h2>Список смартфонов</h2>
                <div>
                    {
                        this.props.phones.map(function(item){
                             
                            return <Phone key={item} text={item} onRemove={remove} onEdit={edit} />
                        })
                    }
                </div>
            </div>;
    }
}
 
class Phone extends React.Component{
 
    constructor(props){
        super(props);
        this.initialstate={text: props.text};
        this.state = {text: props.text};
        this.onClick = this.onClick.bind(this);
        this.onEditChange = this.onEditChange.bind(this);
        this.onClickk = this.onClickk.bind(this);

    }
    onClick(e){
        this.props.onRemove(this.state.text);
    }
    onEditChange(e){
        this.setState({text:e.target.value});
    }
    onClickk(e){
        this.props.onEdit(this.initialstate.text, this.state.text);

    }




    render(){
        return <div> 
                <p>
                    <input type="text" value={this.state.text} onChange={this.onEditChange}/>
                    <button onClick={this.onClick}>Удалить</button>
                    <button onClick={this.onClickk}>Лист</button>
                </p>
            </div>;
    }
}
export default AppView;