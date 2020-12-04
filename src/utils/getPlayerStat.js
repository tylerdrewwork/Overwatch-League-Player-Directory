import CATEGORIES from '../data/categoriesContext';
import _ from 'underscore';

function getPlayerStat (player, category) {
    return _.get(player, CATEGORIES[category].path);
}

export default getPlayerStat;