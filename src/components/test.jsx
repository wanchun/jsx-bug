import { defineComponent } from 'vue'


export default defineComponent({
    props: {
        title: String
    },
    setup(props){
        return ()=>{
            return <div>{props.title}</div>
        }
    }
})