export function getData(callback ) {
    fetch('http://localhost:8080/messages')
    .then(res => res.json())
    .then(messages => callback(messages))
}
export function addMessage(data) {
    this.setState( { messages: data } )
}

export function Colors(data) {
    if (data.match(/[A-F]/gi)) {
        return 'navy'
    }
    if (data.match(/[G-K]/gi)) {
        return 'red'
    }
    if (data.match(/[L-S]/gi)) {
        return 'purple'
    }
   if (data.match(/[T-Z]/gi)) {
        return 'green'
    }
    if (data.match(/[0-9]/gi)) {
        return 'yellow'
    } else {
        return 'orange'
    }
}