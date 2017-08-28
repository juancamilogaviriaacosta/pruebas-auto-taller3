'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'llamadoapi-audit',
            description: 'Tiempo primer llamado a la API rest',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Mide cuanto tarda en consultar los horarios del metro',
            requiredArtifacts: ['TiempoPrimerLlamado']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TiempoPrimerLlamado;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadAudit;