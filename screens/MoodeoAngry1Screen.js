import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native';
import {AuthButton} from '../components/AuthButton';

export default class MoodeoAngry1Screen extends React.Component {
  state = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    videoURL: this.getVideoURL()
  }
 
  getVideoURL() {  
    videoKeyList = ['uyrlWCK6U7o', 'Azz7uDcyYyY', 'QynCvny8ikQ', 'dveODkUrOqY', 'yzaumhmQgso', 'wmElWWAIT30', 'ckwzSa7Xjhs', 'lKol2GOSPeM', 'DG8rPBlbOrY', 'QpNXHJGfGYo', '2qoj6BRFT5c', 'SIgOf_kVDj8', 'myjz2UUdNVA', '4KW3cjkp9c8', 'Rz1E8uMHWoM', 'XyNlqQId-nk', 'J9KPR_YpuN0', '7Fpui4o8vso', 'jjWhgqxly98', 'd52SPLgL9iM', 'TbE84hvX0kY', 'qdiKZ7gec2E', 'uWdGNFZmE_s', '_CgLD6mWUjg', 'diMuXXJ_m7E', 'vWHPnNnWY4A', 'eKbytA_rAtk', 'QZdaZT_DLg8', 'fBJJg70UKS4', 'PO2E_VmcZ5g', 'tujTxf5Sjwc', 'fN5nN6NYJFs', 'z8ypA2Nm3FI', 'vHFghwL0s7g', 'wqTXF6JxYhQ', 'eHl7jMIFDpU', '_pxRLV4i3CU', '-4vAx94ENIQ', 'REJLBz9X6Os', 'IUAZWyv72go', 'ZE4SfJg_dhc', 'EF2aKqlgUvs', '_QYcgxkZnvY', 'byyuwSL2-S0', 'xDTRiloP2Cs', 'EQKmZDT0CRg', '8tMq70b0Ork', 'T0vZcGhAus0', 'RglyFUv8x0U', 'eXKmzXUGNk8', 'TNGls3DpNGQ', 'F9-BRwnxriw', '1VSGbCQY-Kw', 'mbbsxAiNeJg', 'Nlp-v4joPb8', 'dmYJBQL28Dw', '9lEXm4rj_t8', 'ZGJMSPXuCFU', 'Fw1Fc_y_2Ek', 'MPrHKt315Qk', 'rmbk0Gu3f_M', 'I_mBLWpdwnI', '68ORjuHT1og', 'xKKzIoJgMSQ', 'GaMoYXv3kUw', 'bsYiX-bMWgk', 'P1JB3inHIM0', '-E74R4-lUPk', 'wd76pGXDVK8', 'HoyIsCyuJAE', 'utGk9LQJDLw', 'fjZSLHvkg14', 'VJmlmRIWA3Q', 'bSp0vaOjtQc', 'L9Di-UVC-_4', 'nhnryehvftk', 'G6jNayUy6ek', 'lyarPFYRH8w', '4KsGLV1sbmk', 'DIIWAdmmQzM', '1P526n6wfP4', 'Gkb1QMHrGvA', 'aJVhxromBoc', 'M16CGK1T9MM', '-PljiVXB6X4', 'FHczHp8JqhU', '93b3D1rNlZs', 'Tw5CCNjXAEE', 'd4rIwyVW-Gg', '06vgW8KgqXU', 'a6jJzOc9gaE', '_RCdUBYJBDo', '1od1IvxxSXY', 'AkDkampJoHg', 'roymTEdOfHs', '8MfFVf0IPGQ', 'yZIMBGMdvX0', 'ErYZKQxdsfU', 'a9SeDc7nIS4', '3CAhU1a0z3s', 'wVONXTt7gD4', '7IFeHPzz60I', '2sOr97tL8vY', '7me1jcVKTWk', '7kGHEcKRQWI', 'mJryNhFOVLI', '5dsGWM5XGdg', 'RCsQcHvT-Zk', 'qK94JoVGqSQ', '7HM--R92wiI', 'WtlRh-LR88g', 'E84VqqCPI7w', '7SNxz3B1Uc8', 'IN_kywkEyhc', 'Ez0CTpAGDg0', 'll58ZrIupKA', '30zDnYUPkxg', 'U18VkI0uDxE', 'A6sd0eB6ujk', 'I2d6X3c2x9A', 'RWv99Jbr1Ho', 'obw0uNdor80', '1hLWOcjXOM0', 'IgQd0lrS5e8', '5Ypl6N4biH0', 'dZ4R8vwnpMU', 'vx_RpCMcg6k', '_rMXWJUasSs', '_NIaCICPC24', 'nRuTErfieFw', 'GhB_72yymEs', '3ZMEUrG8OWg', 'CBjSgqidxnc', '1GL35T21k54', '3mQy4uFrUjg', 'ISP4E-Iiits', 'wxsyUj4FK0w', 'Z4oJdTC_LCI', 'Lft8OaSlNd8', 'c8yW0TW8D74', 'OUZ1IYbvIok', '4ind586OPDU', 'ODlyf5Pn9Vg', 'sAky2InUsEU', 'OwPDPiE2ivI', 'RR1kCdJcryU', 'KSiDItVvi_g', 'nQk7PXEwnfI', 'GSLSwwkLRW0', 'uiqDniB8T6A', 'IgdCUsH6DMI', 'wnHaSPhc0ys', 'kuEbZHW2dlo', 'UxLRv0FEndM', 'zZFjQ2U908s', 'sIPE6zFSlCU', 'r21ybCwXMjo', 'diBUkFiVpHI', 'KkQ9IhSskUc', 'Qglifokiuvo', '7asB7FFXsiU', 'WsPK5lVpVgY', 'ySV_-JggXNU', 'a7PCZJr5A9c', 'hRfG_bFtI-0', '5EbIeZl2Eqk', 'E-3nDH3Cn78', 't01lyuAF1rw', 'KN85OHYqX0g', 'FkiK5aafXk0', 'V4nAthloSeo', 'Cq4yLBLCWr4', 'IxG3Cv5qK00', 'Tn1vZWDEOMI', 'tV-wgZBGfCo', 'uDRC5_QS9yM', '84-Ie2Nakvo', 'JPOzWljLYuU', 'HttF5HVYtlQ', 'lavqYwfCkuQ', 'SpVppYtz3y4', 'OTCXg1bOsVM', 'vQToLSbBwbw', 'QbQN5rDVRfw', 'x5V64dFq3To', 'hKjfyZg_n8o', 'gfvzLDm_JrI', 'xAi-T4bCYxk', 'dtEIEjUzvEQ', '5NmIav-DttI', 'XNmYr2_uvGU', 'iBRk60CAgxA', 'twSvd5bQLDw', 'r8DP4ODItxA', 'G_1jjqKFYaY', '9_7Skw8qtLY', 'UDugant6hwE', 'Q4AMhFDtmB8', '2aK8hy50fS4', 'XonQbZZsU-I', 'DODLEX4zzLQ', 'BATg388DiDQ', 'FmNBfDjD4So', 'kPHcrgWkrI4', 'wgzdb0txR_c', 'rEn0x1DCk4A', 'NOhyduxTOGo', 'NjbmUhKpp7k', 'grYgp0E1Dig', 'F7pqO7YKBt0', 'kIDQVoDmVrM', 'HE9nLWFZ6ac', 'HHs8fGC5WF8', 'fFFoGfbekjw', 'OQjmnr45AP8', '-72P_EFphSc', '_Gp6nflVURg', 'K5FRCPbQvWI', 'CdGuccnjbQc', 'UnW3xkHxIEQ', 'Hw6NhAsng-s', 'WdJwhoHBfRc', 'TDRGpbxOBtM', 'cqn2-SwmF50', 'FOdwzKnh0Jg', 'B8mCUkqSSCs', 'wdcGSk4x6cg', 'wJNmoObhwqk', 'D2gH2FtzFGQ', '3QDYbQIS8cQ', 'cBHGzJadZxQ', 'oXDaPek2j68', '79Mib0BY2K8', '4bhpXhxP-WU', 'Ls63WNsHa9I', '2oWk4ZiuSHE', 'zvbt6TANVhY', '4H-EnMsOOIM', 'WEkSYw3o5is', '0OTa0rpK85U', 'lt4xV2sKv1k', 'bmPahVslj3Y', 'BXW6SVsQgb4', 'tPb8AXteyes', 'b7SCGxNm5Ms', '5GIdVrAuLqA', '8igSA8HdR_Q', 'Si5jx1uEIF4', 'XTm4JKlPvX4', 'FGTaDkZjrl4', 'p8kcbCQ667U', '_y2iCBYWZQU', 'ItlSyDva2-g', 'Kj5nCaqd58Y', 'NTr-thiOcJE', 'MhEY7UtBLJA', 'iXRzglDZnqs', 'UYBOBYHs8QE', 'QrVl7mgVSg0', 'qeUmtUJqhxs', 'fAaKlBKoiy8', 'T66NCOZUIFI', '8mP5xOg7ijs', 'NNKQBdeQd8c', 'DMj8xB5rzj4', '3TAjPgFRiaI', 'VikV6e4PRCo', 'SWQ5ZWd04nI', 'ZjWSsfLYS8w', 'bwDCcto2yk4', 'y9BBxy7w7mM', 'b00j2aCT6Ug', 'Y82Bk2VWD-M', 'oJI0CxHx0N8', '5IkhPsHx0Yo', 'MsTCsmqkezQ', 'pnSdPL33ZhI', 'E7KzbBr6-84', 'rKLk0JUS4TE', 'VB4CCHHYOqY', 'lhmfEPL7TIA', 'bVGSochuDco', 'sR-DUPXzD0M', 'eWU7z6drQps', 'dlGPLSdxpAo', 'CWIH716Mi9k', '7F-UD_NlDrk', '4z1-KJbH7Sk', 'WiL5S4Hux8E', 'dfJ92d5Sohw', 'pOMqqI-kzHY', 'y3edDDTKKtA', '0E9QYW1w8rg', 'rE8U6U9Uasw', 'vn5a0xQnkOA', 'XO0psFtLIno', 'nuroWODcgL4', 'Tb4B0Fc8V_A', 'tJ3vN22KFYg', 'cU3ufuM4S7M', '5AKKpbZYXtk', 'oNqJ_IV0PCU', '_pf-dB8pJFg', 'YNc1ykg0Im0', 'Bi-dw5sWPNA', 'DkXlUNCN6VM', 'tkbG1uSH0to', 'eryKY1fhUlo', 'Nx88O2Vun0Q', 'ihFWv4_Pru8', 'w6TGaZtxq4c', 'jSDiWaeDNhA', 'vDoF_QsQhEk', 'MwdnmiDJukQ', 'MrbXEAopNoM', 'QJcprcmyPck', 'yCYMBg4kkbs', '1qyyXfQL5jU', 'p33PkLnYyxs', 'U0uCnAOEcHE', 'ttD1A9Af6pc', 'tyk0MLrR12s', '-bjq-Im_uhc', 'f8sW_tv0WRI', 'NebMPrciGmg', 'f5Y3cf3MFIw', 'SCt833deNHw', 'AcL0MeVZIxM', '8Bz5B1Y5yRc', '5yFfCAaedgA', 'HWtlwlVkVJQ', 'ODyI7awW9Ek', 'aYnyMPc3LQ4', 'uMLQEco892U', 'JTQVL787QQY', 'MCeRJJ8T_50', 'kCPjif6E03g', 'TZqFokYyluw', 'rgSr1NkFV-g', 'quXasQA7y4I', 'fs_eF49kaok', 'Rv0IvHA1zlI', '8RkcoZIYVWg', '-pxRXP3w-sQ', 'RT4j6bX9geM', 'uvRgQBJ6EEk', '5CXRlgAAQVQ', 'mXoUw6SapkI', 'U88jj6PSD7w', '9yjB8K3yJa0', 'etmzb5xoCzs', 'Ixo-7HbsDrw', 'NmPcx3CM-9M', 'fDXFQ9VNOC0', 'BqaVEMzb9b0', 'tzFdG8JVoHQ', 'H47ow4_Cmk0', '72NfSwCzFVE', 'Wm6BPqzH_Rg', 'zOYzHDm684c', 'Ec-70W_K77U', 'tCzREdC0wvU', 'tjQqJwpYwN8', '8Bc0WjTT0Ps', 'jvXywhJpOKs', 'IytNBm8WA1c', 'SND3v0i9uhE', '6zkSUJ4BONo', 'OKY6BGcx37k', 'oOzJAgwfhxo', 'kvobPhebC24', 'ivmBE6MQ00Y', 'J44EVlzW1yw', 'frUKZFpmAfg', 'hmhgwxNh75o', 'bEMvJHgF-hA', 'qWsB8U0KSF0', 'Tw-_hVpLWMU', 'KLRmRpH8XmA', 'hEOBXekZZDU', 'cBz44TI9918', 'NH2W8cg1kOg', 'OFMSsFs1yD0', 'lBH0E26bULA', '_wFbiy_LIH8', 'lliGa3ue5XM', 'zOOSetiWxyg', '7PIq2AeY7Sw', 'ub6ERmXBiBc', 'JwtT8xZ9boY', '2HCXN96Zzbc', 'LCxOx4CAmOo', 'QHw3ieSEBlM', 'iZ0GQ7w1D_U', 'q7PSnZRz5s0', 'vq7qoq6jiJ4', 'wNwWO636Hgo', 'oUPRUcDNNbY', 'TttUIFXaAkM', 'ccBM225ZtRg', 'r_F-yfvut-E', 'YLsNiBDAJQM', 'kZzzSaXwpXQ', 'e-O8Pr0mxSk', 'fE7MrxWMFL8', 'tCadZObwl2k', '3uSTOHa4Im4', 'VMldgbhdXes', 'cafyrKgg1dE', 'hDWoCIVV6Rc', 'TOQOfdld5DA', '8enCexu6TTg', 'TODFXrJTDlc', '7L4JnAuW00k', 'agX0a_XlwdE', 'aUazSpz8q04', '9iEBaI6c5sw', 'A8JsRx2lois', '5Syd5IHTATU', 'WxUulGkLu4I', 'ZAmZucyzyZM', 'tJ2aN23sLfQ', 'b1nxf5KQ2Js', 'aO4dTgt47No', 'USXJrvIugEo', 'hkANcahJA4U', 'czCEOIoLde0', 'oOEwmeA5SuE', 'fewv7_O9-R8', 'FbVuPsSSkas', 't2Qu5KG_jDE', 'FsdWNU--qsU', '-F1oZ3-9QmU', 'EtH9Yllzjcc', 'crfvkM8_FFA', 'mB9uFt3XF4I', 'bESqwlICksA', 'C7F5Y-pXd2c', 'cStja5Zrjs8', 'FVjbo8dW9c8', 'PrpyteXgpdY', '3wbrtPJ6Wdo', 'eywi0h_Y5_U', 'NOs-5dAAEdk', '6nh_pIm36FY', 'gqfU5TSCmnY', 'P9oLZsk-DzE', 'uM4Ys0tiYXo', 'lUedtfxLj4Y', '0ltosWoe48Q', 'FnaqC2ZH3Z0', '94xyOpETYYs', 'nSuoXQDsZes', 'sVQrNQOKgAI', 'xZm_fociPi4', '4kJmETiSB7w', 'v8PSNd7uKi0', 'orYcAiFqknU', 'vbA926S3hjs', 'gRyPjRrjS34', 'pOsdG5KQI70', 'MCYWF_0f3ow', 'PAqaRrS2TtY', 'Ty5MQUTgdpM', 'JZPRHekD3NU', '-IvKyCF5bwQ', 'pJXj3Xtrsug', '9DID-em2OtQ', 'sQ6soPvlfCI', '6PqMe7fydq4', 'fLF53T4eHWY', 'dTl6zLneb-E', 'TM23x21Qs2Q', '8Zi92u_EdpQ', 't7eczoBQhYo', 'sgOZNUoT9L4', 'J8G4-tISqtg', 'he3DPldzW8I', 'sO5Xf8n9PWI', '0WCbVAxyoHk', 'aBABkTN8n_w', '54hdN3Upocs', 'DLFnZdiK14Y', 'iUKUwf69iZs', '2v5t5GTYvrA', '0TPzdNQEDXw', 'PbxG5yK3gxI', 'abDb0imYLiE', 'RNXb6BvRyvg', 'DqLKspfPeHg', 'qPhVZExcGXg', 'QCpxprhyr80', 'uhHqk_k8kos', 'fPFoGDtFmek', 'RljAn-l0rt8', 'P1kmOtdHcZ0', '4T6E1htlV4c', 'BByucZ2WkiE', 'l-2IkB33hDQ', 'piMu51ZXcS8', 'WIIOY0I1fqI', 'evQGL5MXDwQ', 'JZq9u-UfM1I', '5thRYLGCEBs', '7GnkCu8Igg0', 'I_zyE3l2DUg', 'FGqscZ9S9qU', 'yIFPzlgNahM', 'krb0DdVqB8o', 'QfxelhCskKo', '--Hb7ErpanI', 'hjuFTA4Ns8s', 'HpUT7OCbcJU', 'GUCqXqaZ01Q', 'jfdTnFI4j_Q', 'qcYq0sxfLMo', 'XnJUfwyYqlk', 'awV7kmKDqDo', '4BQWSy0j-jQ', 'b87EiVZypdw', 'WHG020bRnao', 'ey52l_cF2rs', 'RP4abiHdQpc', 'Y73jjPOiePc', 'y3yRv5Jg5TI', 'jySrwZc4sZo', 'H_bmFJRcseg', 'SzJ6fYiItKc', '2PDK3a7tYbs', '3Y5jA6uLgiE', 'w1lZyr7zgKg', 'a5MFAzbG-bc', 'YfCCFrHzMBI', 'k0CJwbayisw', 'NLLKSHJfrvU', 'EAseH3ji1_o', 'T2uWvrwq4T4', '9P5JrKoemKk', 'ZIEtYbGa-FY', 'l7j6FP8Oam4', 'Fq_BkZ8cKDY', '-5FTJxfV3pc', 'AQZucmBO1-4', 'unnautjOSws', 'pjj2mKRU5Bw', 'T1c75NxL_8w', '1nDXu8L4oAU', 'I5_SMjsm2Qg', 'sv9Jaa-S4oc', 'ZDxFaPVHAIQ', 'bi4i8g62v2s', 'v3_9BmdBs_c', 'QbpOLwDikCI', 'G5qABSG0tiI', '_cToTmOrQ0s', 'luF3Gq225EU', 'n3bF7EFW1bg', '8LKQhN_DT3A', 'gonVHW_X79U', 'BzH_ChK32OU', 'INoiL5pPiiM', 'G87UXIH8Lzo', '1O-EFX1Y5Jo', 'lYnhckZcllU', 'giqWv8fsiS4', 'FQ1fJbYhbVQ', 'rdtuQD3HWWI', 'B5madndLkFo', 'W7rJpRqK-8E', 'Ugz-3Ppd_yg', 'CJVZPwWP5JY', 'ZwFcCu2_gBg', 'j5Wv5zkZqaM', '5jouqRtvCvg', 'osbxMbHUNe8', 'PorK5tqU3Ak', 'X9kwLxiCNuo', 'lFAhEjbNVbY', 'm3yyA12PAy0', 'Yi6Z8sJfo6A', '0oCGq4zUIjc', 'USTJglAXCok', 'J1WSTUBE4IM', 'KYmQGQ7AlCU', '-Cv4qOyz0dA', '6okJUQdoR-A', '6FO55qg2Lnk', '1t4_F_1h0qM', 'K7xN8pXJIz0', 'TcRhZC7tbD4', 'FopyRHHlt3M', 'R7ghDhpCLKM', 'ch_zVA1wyYs', 'xRq5Qr6J9QQ', 'r4fwfYVYxR4', 'eHoSfBL0NgY', '26a8JITwImQ', '3p4SDblXHU8', 'RKU6x1n9Hak', 'rwIJN__WTQ4', 'eKOWT01oEuo', '81O-OR-lKis', 'qnsaSb6cgls', 'ZSkyS3mfy8w', 'Aq_RwiyKj5Q', '_JMWfcTzkys', 'kmfLolJqOik', 'YPQ_N4imYVE', 'NrfmXVWYUpk', 'okLNJkRq5Hk', 'ES27eG82C6g', 'e-fhzqMNJOE', 'f92VWkYl8CI', 'jPWV_lITjW4', 'UjuaZDdqmCw', 'zIwh0njInPk', 'wQ674tXv2tI', 't5wy4dAYUAE', 'SazYwqcGo44', 'FX1HaV_qjOM', 'dGID9OIwyRQ', 'UDEN_aDkWLA', 'lC8eBWDfY74', 'mORJmK1Ljgk', 'z0yfuG365yQ', 'Cyy-mV1cazg', '8y45owm80MM', '4Luqg4Na9v8', '8ccFSXgdv5U', 'LCRTuC0zv3Y', '6lu17rWygSc', 'TXaO22yzaMw', 'DxJI7Uz8xnU', 'X07LTqRxOGk', '8e1pQuRcIbo', 'rRhop8ij4A8', 'bKjtNoSAilY', 'CVdtKjshjVg', 'GHhFtkGfaWU', 'oAKVh-5E6C8', 'QvvzRuBN9H4', 'PB3H9LamkZ8', 'g2MTSDWYFDs', 'bzZEH_5OuIs', 'MtIibcNDQ6o', 'JrDkVw0Sa-8', 'RJlDnXwswM8', 'iZCQ-91m8FY', 'n7c3NUgHrIU', 'oKLFuhRej3o', 'kOEFvVyAH5o', 'e5UwEqWiK9k', 'S5oR5WrUvJo', 'Z6tJoI0gd1Q', '80da29A-DZE', 'cqTvkl5u6Js', 'MbhwvOz-18s', 'P0ytb8GRJg8', '7EW1SUzRgvI', 'IWINtUCshxY', 'kzztCpqcL7w', 'hCm68Bbn_10', '54ShtRrdv-M', 'xHDk2ui94Y0', 'eiy5Hrp50fw', 'piaP8-6zaNc', 'xxjT7nK0Q9k', 'KmIvyryFYHo', '0SVt_G_OQBo', 'V1yv0ETlEls', '2iGa03cVtso', 'nz_eqFDiO4o', '2Cwk-dyuFMw', 'rewzRbLPJXY', 'SAgYiERRDPY', 'HtXUj4DMCCc', 'KBw2eJ2LO0s', 'qNJ1dfCCJFA', 'nQPLmpBL2uE', 'HIehtCNgvrQ', '7HDTcpi1XEI', 'uGJszHj37lE', 'BOfF5WyR9s4', 'yFEXYKIvpfQ', 'RA4RlEo87e4', 'PLgbdmrqQ7w', 'tr-H8dR0HLo', 'jrFgD9-l390', 't-RoVsUlXHI', 'PXaBLuI5464', 's8n16rns-iM', 'cYSSgtSvk9g', 'a9l4t9QssoA', 'X_xLrw0g8Xw', '0_fPV13lKm4', 'BQw3v31s-Y8', 'hpnQ2fdgKa0', '7na_-LfGfpE', 'Zk4JhPSGVpA', 'QJnfGBP0qRA', 'f7pl1XfnIac', 'FBZtUODY2vI', 'HlvfB4LJ0EQ', 'L-4zfsy6rsM', 'bB8a7ht6KXI', 'QDZaKFo2FBU', '5sx5t3JoysE', 'cb3a4c-FILc', 'stjKC4O6rTM', 'qXL-TykIdE4', 'HrWVVCuMbdg', 'fYDDfyKKD04', '2rdGVxaA59c', 'W5IJcsp0QHI', 'Htglfb7lU7o', '_Q7dn5NgTMg', 'j9CdSomS65s', 'b0vBnn5XPsQ', 'zn_wwL3y4lE', 'KAxHlDYZZdE', 'KiP4jwiTazI', 'NsKurka2gKw', 'HPaAIfimqSo', 'Q1qndga6SNU', 'S0ZKH2PGA8g', '35yd_H5oQ6U', 'SCbndpezewk', 'i7p_DFqVmW0', 'YJwZMUn7GdQ', 'H3-UVHwQrdU', 'yCCI1r2ITe0', 'MLgWSesSYRk', 'K8DgKpEDmJU', 'MRKKGwE5N58', 'OoI57NeMwCc', 'gVUYeYN4Tvk', 'Gqcx-EYs19U', 'FhKM5ow-oQE', 'CNScM66KXAI', 'vRK0eSCYYFk', 'ZBrc_OZkPe0', 'gBZCNphwudw', 'P2qOZDuiYlM', 'jKS3MGriZcs', 'QQ8l83uqYcs', 'e2AtyJKr0RA', 'KUXvyKakDWU', 'diU-SOVxFhg', 'tHXGyE9-rrg', 'wPrH3WUZEVg', 'AaVVCVAT9Fs', 'Zs4OMZf8igU', '5wwWfZ0-ZQI', 'k5D_TXCOlUw', 'BLXwpGCn2KQ', 'FSSIuUAoTbQ', '4RHMYv7_zBo', 'LkC9ytoi_DQ', 'ynSeKMvfIAY', '6u1LfBm6fmo', 'vOoULsLcrgs', '2fT6pssrES8', 'rStsx8SGsPc', 'hY7m5jjJ9mM', 'xHuy4SeAuDM', 'Fq4kTZuLops', 'wJelEXaPhJ8', 'dd8JHqjHJ5U', '-1FUF7atd64', 'aqP49Y79Qk0', 'hQ4WE0GviLg', 'STV0hcSNt40', 'azz9euu1twE', 'LcDWzISnOSE', 'ZnlFPBlCLfs', 'ghMvwWwF1pU', 'CRUXthSTfwM', 'iFdvFSxpdQ8', 'OeHSZT3RGMM', 'kFHzCd7RmW8', 'fLeI6_iimeo', 'Sz_OKfPUIlU', 'YPAqr2BYiPw', 'vsEg22QXIs4', 'AEw5vxc4Wbc', 'yCNapZ0eCX8', 'zBkuNpgACH0', '4oj56rWrPr0', 'hUyS5FRHaQA', 'p32OC97aNqc', 'Bs-SX8D0cQ4', '4C-BNXtLnjs', 'pNCkp6x5yT8', 'QZ7ta6l9Oyw', '9xH0xorgUoI', 'rCZyTuHpAhs', 'h8NrCTia0NU', 'jmUmSht9MEs', '40AG4-_w7gg', 'QcHBmZt34E4', 'tT5FvbVHq70', 'd23Pp7ETErE', 'eWHYJpJcLcU', '2DH_vYFuJOI', 'N8Fin1aw9oM', 'aiLuO1M6B6s', 'Y_ShErm_DdI', 'bGHM6DSAgiA', '6cjuTT-EmuA', 'Ab93DYcqrP8', 'rEOugUo1A9g', 'fYdwe3ArFWA', 'azNnBfyU0Mo', 'lmuIJkCBn5Q', 'E6aMBYTH3wM', 'PYOSKYWg-5E', '3YI9JIoMNqc', 'OuXuZU97Fy0', 'Are-c0BLyIg', 'wZuAInivt54', 'K1hlp0DCE_8', '6htNTSmEt0Q', 'b2qM1I-JCEQ', 'A8TSBw5JiWE', 'TNYfSpE5Sow', 'auFiXfdj-FM', 'wb0gLVFnrCE', 'ZDHGV-M9cHw', 'EG17VubUHGk', '6VCnimtcXTo', 'Ev3sRw69RuQ', 'Dm39FRf7Ixg', 'j-admRGFVNM', '-rqz7LjH7aU', 'VpTBL8Dg3Is', 'lhWbo135Efc', 'GmBWvF6-4DQ', 'DC6gB79GDzc', 'IVhv6ivo988', 'Iu1oFeqiy44', 'ZpoyoPSiB3M', 'iQBzJVFT_5E', 'x7FkGQ0ATmw', '1Q4MKOW8FZk', 'sGeDwZR5BOY', '9Y6XDy7hJ6M', 'icpCeX9UeNA', '9wkXufnY_Z0', 'nMjxNuul14o', '_uh2R0jSIGs', 'lkijFK-LCfI', '2yrfexqY500', 'KsxSxF3JKeU', 'bV_EUMba534', 'nOJ2K4GRx-c', 'L2JR99KXkKc', '7hObPxK6870', 'Ji2B8ya-Zvo', 'pHvr6a2DHOU', 'Ko1bqasNDls', 'vLKEZ7LU4Cc', 'EQ1HKCYJM5U', 'p8phGxzUC_Y', 'krD4hdGvGHM', 'SA7bKo4HRTg', 'q9ew_nITQWY', 'FDgHVNbCcEU', 'ALTzR7yQ2Tw', 'MqowKTcp8RQ', 'QIeoElOhatE', 'Zyjerh9kLQA', 'ViuQKqUQ1U8', 'UJSGWadv6ew', 'JlCC8e_Uk2o', 'eI5DPt3Ge_s', 'MQprGev54Z8', 'yTfN4sBW6B4', 'S5p5cAhJCvs', '66AA57WNV78', '5j7J_HTj3sA', 'BhJrqoUFAHU', 'V3oeAYBQcos', '8-u5nd2GqNE', 'EMZ9OZhpl-Q', 'Ddn7mx3cKQk', 'ysSgG5V-R3U', '3i2WqDxgIyM', '5fN7DCOusV8', 'fMlHrrMRItw', '7qccLJ-slFI', 'nTasT5h0LEg', 'IxgiTeXKOOc', 'xXbvKeOE1gM', 'JvU3hUSime8', '4FdEOxKpk70', 'bi12zACCTak'];
    RandomNumber = Math.floor(Math.random() * (videoKeyList.length-1)) + 0 ;
    videoKey = videoKeyList[RandomNumber];
    result = `<html><body><iframe width='970' height='1134' src=https://www.youtube.com/embed/${videoKey} frameborder='0' allowfullscreen></iframe></body></html>`;  
    return result
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Moodeo Angry 1',
    };
  };

  render() {
    return (
      <View style={styles.container}>    
        <WebView 
          style={StyleSheet.container}
          javaScriptEnabled={true}
          source={{ html: this.state.videoURL }}
        />
        <View style={styles.buttoncontainer}>
          <AuthButton 
            onPress={() => {this.props.navigation.push('MoodeoAngry2Screen');}}>Next video
          </AuthButton>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttoncontainer: {
    paddingBottom: 50,
  },
});
