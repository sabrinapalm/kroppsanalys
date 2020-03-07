(() => {
  const button = document.getElementById('submit');
  const copy = document.getElementById('copy');
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const gender = document.getElementById('gender').value;
    const weight = Number(document.getElementById('weight').value);
    const length = Number(document.getElementById('length').value);
    const age = Number(document.getElementById('age').value);
    const result = document.getElementById('result');

    const BMI = calcBMI(weight, length);
    const protein = calcProteinPerDay(weight);
    const calories = calcCaloriesPerDay(gender, weight, length, age);
    const normalWeight = calcNormalWeight(length);

    result.innerHTML = template
      .replace('[gender]', gender)
      .replace('[weight]', weight)
      .replace('[length]', length)
      .replace('[age]', age)
      .replace('[BMI]', BMI)
      .replace('[protein]', protein)
      .replace('[calories]', calories)
      .replace('[normalWeight]', normalWeight);
  });

  copy.addEventListener('click', function(e) {
    result.select();
    document.execCommand('copy');
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
  });

  const calcBMI = (weight, length) => Math.round((weight / (((length / 100) * length) / 100)) * 10) / 10;

  const calcProteinPerDay = weight => Math.round(1.5 * weight) + ' gram/dag';

  const calcCaloriesPerDay = (gender, weight, length, age) => {
    if (gender.toLowerCase() === 'kvinna') {
      return Math.round(9.99 * weight + 6.25 * length - 4.92 * age - 161) + ' kalorier/dag';
    } else {
      return Math.round(9.99 * weight + 6.25 * length - 4.92 * age + 5) + ' kalorier/dag';
    }
  };

  const calcNormalWeight = length => {
    switch (length) {
      case 140:
        return '39 - 49 kg';
        break;
      case 141:
        return '40 - 50 kg';
        break;
      case 142:
        return '40 - 51 kg';
        break;
      case 143:
        return '41 - 51 kg';
        break;
      case 144:
        return '41 - 52 kg';
        break;
      case 145:
        return '42 - 53 kg';
        break;
      case 146:
        return '43 - 53 kg';
        break;
      case 147:
        return '43 - 54 kg';
        break;
      case 148:
        return '44 - 55 kg';
        break;
      case 149:
        return '44 - 56 kg';
        break;
      case 150:
        return '45 - 56 kg';
        break;
      case 151:
        return '46 - 57 kg';
        break;
      case 152:
        return '46 - 57 kg';
        break;
      case 153:
        return '47 - 59 kg';
        break;
      case 154:
        return '47 - 59 kg';
        break;
      case 155:
        return '48 - 60 kg';
        break;
      case 156:
        return '49 - 62 kg';
        break;
      case 157:
        return '49 - 62 kg';
        break;
      case 158:
        return '50 - 62 kg';
        break;
      case 159:
        return '51 - 63 kg';
        break;
      case 160:
        return '51 - 64 kg';
        break;
      case 161:
        return '52 - 65 kg';
        break;
      case 162:
        return '52 - 66 kg';
        break;
      case 163:
        return '53 - 66 kg';
        break;
      case 164:
        return '54 - 67 kg';
        break;
      case 165:
        return '54 - 68 kg';
        break;
      case 166:
        return '55 - 69 kg';
        break;
      case 167:
        return '56 - 70 kg';
        break;
      case 168:
        return '56 - 71 kg';
        break;
      case 169:
        return '57 - 71 kg';
        break;
      case 170:
        return '58 - 72 kg';
        break;
      case 171:
        return '58 - 73 kg';
        break;
      case 172:
        return '59 - 74 kg';
        break;
      case 173:
        return '60 - 75 kg';
        break;
      case 174:
        return '61 - 76 kg';
        break;
      case 175:
        return '62 - 77 kg';
        break;
      case 176:
        return '62 - 77 kg';
        break;
      case 177:
        return '63 - 78 kg';
        break;
      case 178:
        return '63 - 79 kg';
        break;
      case 179:
        return '64 - 80 kg';
        break;
      case 180:
        return '65 - 81 kg';
        break;
      case 181:
        return '66 - 82 kg';
        break;
      case 182:
        return '66 - 83 kg';
        break;
      case 183:
        return '67 - 84 kg';
        break;
      case 184:
        return '68 - 85 kg';
        break;
      case 185:
        return '68 - 86 kg';
        break;
      case 186:
        return '69 - 86 kg';
        break;
      case 187:
        return '70 - 87 kg';
        break;
      case 188:
        return '71 - 88 kg';
        break;
      case 189:
        return '71 - 89 kg';
        break;
      case 190:
        return '72 - 90 kg';
        break;
      case 191:
        return '73 - 91 kg';
        break;
      case 192:
        return '74 - 92 kg';
        break;
      case 193:
        return '74 - 93 kg';
        break;
      case 194:
        return '75 - 94 kg';
        break;
      case 195:
        return '76 - 95 kg';
        break;
      case 196:
        return '77 - 96 kg';
        break;
      case 197:
        return '78 - 97 kg';
        break;
      case 198:
        return '78 - 98 kg';
        break;
      case 199:
        return '79 - 99 kg';
        break;
      case 200:
        return '80 - 100 kg';
        break;
      default:
        return 'Finns ej';
    }
  };
})();
