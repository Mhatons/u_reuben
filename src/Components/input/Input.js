const Input = ({
 text,
 type,
 styles,
 fn
}) => {
 return (
  <>
  <input 
  placeholder={text}
  type={type}
  className={styles}
  onChange={() => fn}
  />
  </>
 );
}
 
export default Input;