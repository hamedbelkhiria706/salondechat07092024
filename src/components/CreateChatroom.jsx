import React,{useState} from 'react'

function CreateChatroom() {
  let [newRooms, setNewRooms] = useState([]);
  let [createdRooms, setCreatedRooms] = useState([]);
  const handleRoomNameChange = (index, value) => {
    const updatedRooms = [...newRooms];
    updatedRooms[index] = value;
    setNewRooms(updatedRooms);
  };
  let index=0
  return (
    <div><h1>Créer un salon de chat</h1>
    <form>
    <label htmlFor={`roomName`}>
                  Nom du Salon  :
                </label>
                <input
                  type="text"
                  className="form-control room-input"
                  id={`roomName`}
                  value={newRooms[index] || ""}
                  onChange={(e) => handleRoomNameChange(index, e.target.value)}
                />
    <button type="button" onClick={()=>alert('ajouté')}>envoi</button>
    </form>
    </div>
  )
}

export default CreateChatroom