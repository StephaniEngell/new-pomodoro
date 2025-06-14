interface ButtonProps { 
    color?: 'primary' | 'secondary' | 'danger' | 'success';
}

export const Button = (props: ButtonProps) => {
  return <button>Enviar</button>;
};
