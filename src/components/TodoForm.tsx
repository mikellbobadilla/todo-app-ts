export function TodoForm(props: React.FormHTMLAttributes<HTMLFormElement>) {
    return (
        <form className='mt-3' {...props}>
            {props.children}
        </form>
    )
}