window.addEventListener('load', () => {
    const param = new URL(document.location.toString()).searchParams;
    const name = param.get('name');
    const surname = param.get('surname');
    document.getElementById('result-name')!.innerHTML = name!;
    document.getElementById('result-surname')!.innerHTML = surname!;
  });
  
  let profilepic = document.getElementById('profile-pic') as HTMLImageElement;
  let inputFile = document.getElementById('input-file') as HTMLInputElement;
  
  inputFile.onchange = function () {
    profilepic.src = URL.createObjectURL(inputFile.files![0]);
  };
  