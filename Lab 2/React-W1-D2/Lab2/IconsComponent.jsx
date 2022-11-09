

class IconsComponent extends React.Component{

    render () {

        return (
            <div class="wrapper">
                {socialIcons.map((icon)=>(
                    
                     <div className="button">
                            <div className="icon">
                                <i className={"fa fa-"+icon.icon}></i>
                             </div>
                            <span>{icon.title}</span>
                </div>
                ))}
                
            </div>


        );
    }

}

