export const resultsMock = (): any[] => {
    // let results: Person[] = [];

    // //setTimeout((): any => {
    //     axios.get('http://localhost:3001/people')
    //         .then(async response => results = await response.data)                                   
    //         .catch(err => console.log(err.toString()))
    // //}, 2000);

    // return results;

    return [
            {
              id: 1,
              name: "Batman",
              imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg'
            },
            {
              id: 2,
              name: "Ed Grimley",
              imgUrl: 'https://pbs.twimg.com/profile_images/866362899249242112/zLj7TY5O_400x400.jpg'
            }
          ]
}