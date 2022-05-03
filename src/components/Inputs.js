import classes from './Inputs.module.css';
import Input from  './Input';
const Inputs = () => {
    const label=[{
        id:0,
        content:'C'
    },
    {
        id:1,
        content:'+/-'
    },
    {
        id:2,
        content:'%'
    },
    {
        id:3,
        content:'/'
    },
    {
        id:4,
        content:'7'
    },
    {
        id:5,
        content:'8'
    },
    {
        id:6,
        content:'9'
    },
    {
        id:7,
        content:'X'
    },
    {
        id:8,
        content:'4'
    },
    {
        id:9,
        content:'5'
    },
    {
        id:10,
        content:'6'
    },
    {
        id:11,
        content:'+'
    },
    {
        id:12,
        content:'1'
    },
    {
        id:13,
        content:'2'
    },
    {
        id:14,
        content:'3'
    },
    {
        id:15,
        content:'-'
    },
    {
        id:16,
        content:'0'
    },
    {
        id:17,
        content:'.'
    },
    {
        id:18,
        content:'='
    }
    
    

    
    
    

    

    
];


    return <div className={classes.inputs}>
         {label.map(input=>{
    
    
       return <Input key={input.id} label={input.content}/>


        })}
    </div>

}
export default Inputs;