import { Hello } from "./Hello";

export function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

/*RISPOSTE

1 - Puoi usare il componente Hello più di una volta nel componente App? Si, è possibile farlo
2 - Cosa succede se lo fai? Se inserissi più volte l'elemento Hello eseguirebbe tante volte il render di quante volte lo invoco all'interno di App
3 - Puoi eseguire il rendering del componente Message direttamente all'interno del componente App? Si, se eseguo correttamente l'import del componente
4 - Cosa succede se lo fai? Visualizzerei il componenete Message all'interno di App

*/
