export function getFormattedDate() {
    const today = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
<<<<<<< HEAD
    console.log(today.toLocaleDateString('en-US', options))
=======
    // console.log(today.toLocaleDateString('en-US', options))
>>>>>>> 70a242a0161f8339dfbcd9be9e85327ea488bd68
    return today.toLocaleDateString('en-US', options);
  }
  