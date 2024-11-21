---
title: 'Vulnerabilitat crítica en un plugin de WordPress exposa més de 4 milions de llocs web'
date: '2024-11-20'
image: 'vulnerabilitat-critica-en-un-plugin-de-word-press-exposa-mes-de-4-milions-de-llocs-web.jpg'
imageTitle: 'Foto by Pachon in Motion: https://www.pexels.com/es-es/foto/ligero-ciudad-rojo-luces-18545010/'
---

## Introducció

S'ha revelat una vulnerabilitat crítica d'esquivi d'autenticació en el plugin **Really Simple Security** (abans conegut com _Really Simple SSL_) per a **WordPress** que, un cop utilitzada, podria permetre a un atacant obtenir accés administratiu a una pàgina web.

## Descripció de la vulnerabilitat i les seves conseqüències

La vulnerabilitat, identificada com <a href="https://www.incibe.es/en/incibe-cert/early-warning/vulnerabilities/cve-2024-10924" class="inlineLink" target="_blank">_CVE-2024-10924_</a> i amb una puntuació de 9.8/10, afecta tant les versions gratuïtes com les premium del plugin. El més preocupant d'aquestes dades és que aquest plugin **està instal·lat en més de 4 milions de webs de WordPress**.

_"La vulnerabilitat es pot convertir en un atac automatitzat a gran escala que apunti als llocs web de WordPress"_, va dir el investigador de seguretat de _Wordfence_, István Márton[^1].

## Origen de la vulnerabilitat: un error en l'autenticació

Segons _Wordfence_, la vulnerabilitat prové d'un maneig incorrecte dels errors de comprovació d'usuari en una funció anomenada _"check_login_and_get_user"_, permetent així als atacants no autenticats iniciar sessió com a usuaris arbitraris, inclosos els administradors, inclòs quan l'autenticació de dos factors està habilitada.

## Solució i actuacions immediates

Després de la divulgació responsable el **6 de novembre de 2024**, la deficiència es va corregir en la **versió 9.1.2** llançada una setmana després. Aquest risc va portar als desenvolupadors del plugin a treballar amb _WordPress_ per tal de forçar l'actualització de totes les webs que l'utilitzessin abans de la divulgació pública.

_"Per desgràcia, una de les funcions que afegeix l'autenticació de dos factors va ser implementada de manera insegura, cosa que fa possible que atacants no autenticats obtinguin accés a qualsevol compte d'usuari, inclòs un compte d'administrador, amb una sol·licitud senzilla quan l'autenticació de dos factors està activada"_, va dir Márton.

L'explotació reeixida de la vulnerabilitat podria tenir greus conseqüències, ja que podria permetre als actors maliciosos apoderar-se dels llocs de WordPress i utilitzar-los per a fins criminals.

La divulgació arriba dies després que Wordfence revelés una altra deficiència crítica en el sistema de gestió d'aprenentatge WPLMS per a WordPress (CVE-2024-10470, puntuació CVSS: 9.8), que podria permetre als actors de la ciberseguretat no autenticats llegir i suprimir fitxers arbitràris, amb el risc potencial d'executar codi.

Concretament, el tema, abans de la versió 4.963, és "vulnerable a la lectura i eliminació de fitxers arbitràris a causa d'una validació insuficient dels camins de fitxers i de les comprovacions de permisos", permetent als atacants no autenticats suprimir fitxers arbitràris al servidor.

"Això fa possible que atacants no autenticats llegeixin i suprimeixin qualsevol fitxer arbitrari al servidor, inclòs el fitxer wp-config.php del lloc", va dir. "Eliminar wp-config.php força el lloc a un estat de configuració, permetent a un atacant iniciar la presa de control del lloc connectant-lo a una base de dades sota el seu control."

###### Notes a peu de pàgina:

[^1]: <a href="https://www.wordfence.com/blog/2024/11/really-simple-security-vulnerability/" class="inlineLink" target="_blank">Article de István Márton</a>
