

const SwitchText = () => {
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    let text1value = text1.value;
    text1.value = text2.value;
    text2.value = text1value;
};