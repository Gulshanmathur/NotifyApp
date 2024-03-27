import { ThemeProvider} from "./components/context/ThemeContext"
import ThemeSwitcher from "./components/context/ThemeSwitcher"
const AppTheme:React.FC = ()=>{

    return(
     <ThemeProvider>
        <ThemeSwitcher/>
     </ThemeProvider>
    )
}

export default AppTheme;