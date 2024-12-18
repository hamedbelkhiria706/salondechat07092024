import React from 'react'

function CreateChatroom() {
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
    </form>
    </div>
  )
}

export default CreateChatroom