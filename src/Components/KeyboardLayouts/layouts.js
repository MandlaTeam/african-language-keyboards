function chooseKeyboard(lang){
    switch(lang){
        case "nko":
            return nkoKeyboard;
        case 'Twi':
        return twiKeyboard;
        case 'Yoruba':
        return yorubaKeyboard;
        case 'Amharic':
        return amharicKeyboard;
        case 'Arabic':
        return arabicKeyboard;
        case 'Igbo':
        return igboKeyboard;
        case 'Hausa':
        return hausaKeyboard;
        case 'MoorÃ©':
        return moorÃ©Keyboard;
        case 'Kassem':
        return kassemKeyboard;
        case 'Adlam':
        return adlamKeyboard;

        default:
            return generalKeyboard;

    }
}
        
let adlamKeyboard = {
  default: [
   " ð¥ ð¥ ð¥ ð¥ ð¥ ð¥ ð¥ ð¥ ð¥ ð¥ ð¥ ð¥  Ù",
"! ð¤¹ ð¤½ ð¤¨ ð¤® ð¤­ ð¤µ ð¤´ ð¤¼ ð¤ª ð¤« ð¤± ð¤»", 
"ð¥ ð¥ ð¤¤ ð¤³ ð¤¶ ð¤¸ ð¤º ð¤¬ ð¤£ ð¤§ ð¤¢" ,
"{shift} Ø . â¹ ð¤¥ ð¤² ð¤¦ ð¤© ð¤· ð¤° ð¤¯ {shift} ",
".com @ {space}",],

  shift: [
    "ð¥ ð¥ ) ( * & ) ( Â» Â« âº â¹ â¦",
    "ð¥ ð¤ ð¤ ð¤ ð¤ ð¤ ð¤ ð¤ ð¤ ð¤ ð¤ ð¤ ð¤",
    "ð¥ ð¥ ð¤¤ ð¤³ ð¤¶ ð¤¸ ð¤º ð¤¬ ð¤£ ð¤§ ð¤¢",
    "ð¥ : â ð¤ ð¤ ð¤ ð¤ ð¤ ð¤ ð¤",
     ".com @ {space}",
  ]

}
let twiKeyboard = {
    default: [
      "É É",
      "{shift} {shift}",
    ],
    shift: [
      "Æ Æ",
      "{shift} {shift}",
    ],
  };
  let yorubaKeyboard = {
    default: [
        "Ë 1 2 3 4 5 6 7 8 9 0 É Æ {bksp}",
        "{tab} q w e r t y u i o p á»¥ á»",
        "{lock} a s d f g h j k l á» áº¹ Ç {enter}",
        "{shift} z y x c v b n m , . á¹£ {shift}",
        ".com @ {space}",
      ],
      shift: [
        'Ë ! " / _ â¦ % = - | ( ) Æ Æ {bksp}',
        "{tab} Q W E R T Y U I O P á»¤ á»",
        "{lock} A S D F G H J K L á» áº¸ Æ {enter}",
        "{shift} Z Æ C V B N M ; : á¹¢ {shift}",
        ".com @ {space}",
      ],
  };
  let igboKeyboard = {
    default: [
        "Ë 1 2 3 4 5 6 7 8 9 0 É Æ {bksp}",
        "{tab} q w e r t y u i o p á»¥ á»",
        "{lock} a s d f g h j k l á» áº¹ Ç {enter}",
        "{shift} z y x c v b n m , . á¹£ {shift}",
        ".com @ {space}",
      ],
      shift: [
        'Ë ! " / _ â¦ % = - | ( ) Æ Æ {bksp}',
        "{tab} Q W E R T Y U I O P á»¤ á»",
        "{lock} A S D F G H J K L á» áº¸ Æ {enter}",
        "{shift} Z Æ C V B N M ; : á¹¢ {shift}",
        ".com @ {space}",
      ],
  };
  let hausaKeyboard = {
    default: [
        "Ë 1 2 3 4 5 6 7 8 9 0 É Æ {bksp}",
        "{tab} q w e r t y u i o p á»¥ á»",
        "{lock} a s d f g h j k l á» áº¹ Ç {enter}",
        "{shift} z y x c v b n m , . á¹£ {shift}",
        ".com @ {space}",
      ],
      shift: [
        'Ë ! " / _ â¦ % = - | ( ) Æ Æ {bksp}',
        "{tab} Q W E R T Y U I O P á»¤ á»",
        "{lock} A S D F G H J K L á» áº¸ Æ {enter}",
        "{shift} Z Æ C V B N M ; : á¹¢ {shift}",
        ".com @ {space}",
      ],
  };
  let amharicKeyboard = {
    default: [
        "á 1 2 3 4 5 6 7 8 9 0 - {bksp}",
        "{tab} á á á  á¨ á á° á¶ á á á á á  á° á° á á",
        "{lock} á á á á¸ á° á á áá áá  á°á° á á áá°",
    ],
  }
  let arabicKeyboard = {
    default: [
        "\u0630 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
        "{tab} \u0636 \u0635 \u062B \u0642 \u0641 \u063A \u0639 \u0647 \u062E \u062D \u062C \u062F \\",
        "{lock} \u0634 \u0633 \u064A \u0628 \u0644 \u0627 \u062A \u0646 \u0645 \u0643 \u0637 {enter}",
        "{shift} \u0626 \u0621 \u0624 \u0631 \u0644\u0627 \u0649 \u0629 \u0648 \u0632 \u0638 {shift}",
        ".com @ {space}",
      ],
      shift: [
        "\u0651 ! @ # $ % ^ & * ) ( _ + {bksp}",
        "{tab} \u064E \u064B \u064F \u064C \u0644\u0625 \u0625 \u2018 \u00F7 \u00D7 \u061B < > |",
        '{lock} \u0650 \u064D ] [ \u0644\u0623 \u0623 \u0640 \u060C / : " {enter}',
        "{shift} ~ \u0652 } { \u0644\u0622 \u0622 \u2019 , . \u061F {shift}",
        ".com @ {space}",
      ],
    }
let moorÃ©Keyboard = {
    default: [
        "1 2 3 4 5 6 7 8 9 0 - {bksp}",
        "{tab} q w e r t y u i o p á»¥ á»",
        "{lock} a s d f g h j k l á» áº¹ Ç {enter}",
        "{shift} z y x c v b n m , . á¹£ {shift}",
        ".com @ {space}",
        ],
        shift: [
            "! @ # $ % ^ & * ( ) _ + {bksp}",
            "{tab} Q W E R T Y U I O P á»¤ á»",
            "{lock} A S D F G H J K L á» áº¸ Æ {enter}",
            "{shift} Z Æ C V B N M ; : á¹¢ {shift}",
            ".com @ {space}",
        ],
    }
    let kassemKeyboard = {
        default: [
            "1 2 3 4 5 6 7 8 9 0 - {bksp}",
            "{tab} q w e r t y u i o p á»¥ á»",
            "{lock} a s d f g h j k l á» áº¹ Ç {enter}",
            "{shift} z y x c v b n m , . á¹£ {shift}",
            ".com @ {space}",
            ],
            shift: [
                "! @ # $ % ^ & * ( ) _ + {bksp}",
                "{tab} Q W E R T Y U I O P á»¤ á»",
                "{lock} A S D F G H J K L á» áº¸ Æ {enter}",
                "{shift} Z Æ C V B N M ; : á¹¢ {shift}",
                ".com @ {space}",
            ],
        }
   
    let nkoKeyboard = {
    default: [
        "\u07F7 \u07C1 \u07C2 \u07C3 \u07C4 \u07C5 \u07C6 \u07C7 \u07C8 \u07C9 \u07C0 \u07FA = {bksp}",
        "{tab} \u07D2 \u07E5 \u07CB \u07D9 \u07D5 \u07E6 \u07CE \u07CC \u07D0 \u07D4 [ ] \\",
        "{lock} \u07CA \u07DB \u07D8 \u07DD \u07DC \u07E4 \u07D6 \u07DE \u07DF \u07F8 \u07F4 {enter}",
        "{shift} \u07E2 \u07CF \u07D7 \u07CD \u07D3 \u07E3 \u07E1 \u07F2 \u07F3 \u2E2E {shift}",
        ".com @ {space}",
    ],
    shift: [
        "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
        "{tab} \u07D1 \u07E0  \u07DA  \u07E7     { } |",
        "{lock} \u07FD \u07F2 \u07F3 \u07F8 \u07F9 \u07FA \u07FE \u07FF \u07F6 \u07F9 \u07F5 {enter}",
        "{shift} \u07EB \u07EC \u07ED \u07EE \u07EF \u07F0 \u07F1 < > \u07FD {shift}",
       " .com @ {space}"
    ],
    };
    let generalKeyboard = nkoKeyboard;
    export default chooseKeyboard;