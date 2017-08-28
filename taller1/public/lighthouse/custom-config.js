'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer',
            'card-gatherer_llamadoapi'
        ]
    }],

    audits: [
        'card-audit',
        'llamadoapi-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            audits: [
                {id: 'card-audit', weight: 1},
                {id: 'llamadoapi-audit', weight: 1}
            ]
        }
    }
};
