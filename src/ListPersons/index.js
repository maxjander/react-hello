
function ListPersons({name, profession, Key}) {
    console.log(name, profession, Key);
return (
<>
  <p><span style={{fontWeight: "Bold"}} >{name}</span> <br />Profession: {profession}     </p>  
</>)
    };

export default ListPersons;