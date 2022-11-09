

const socialIcons = [
    {
        icon: "instagram",
        title: "Instagram"
    },
    {
        icon: "facebook-f",
        title: "Facebook"
    },
    {
        icon: "twitter",
        title: "Twitter"
    },
    {
        icon: "linkedin",
        title: "LinkedIn"
    },
    {
        icon: "youtube",
        title: "YouTube"
    },
    {
        icon: "github",
        title: "Github"
    }
]

ReactDOM.render(<div><IconsComponent icon={socialIcons.icon} title={socialIcons.title} />

</div>, document.getElementById('root'))