<template>
    <Title>{{
        $t('about.button') + ' - ' + useAppConfig().contact.company
    }}</Title>

    <AboutMeIntro />
    <AboutMeGoals />
    <AboutMeServices />
    <ContactBox />
</template>
