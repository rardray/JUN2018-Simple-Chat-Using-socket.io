export function getData(callback ) {
    fetch('http://localhost:8080/messages')
    .then(res => res.json())
    .then(messages => callback(messages))
}
export function addMessage(data) {
    this.setState( { messages: data } )
}