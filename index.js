var postcss = require('postcss');

module.exports = postcss.plugin('assemble-button-helper', function (options) {
    return function (css) {

        css.walkRules(function (rule) {
            var notificationRule = rule.selector;
            var ruleScan = '';

            if (notificationRule.indexOf('.btn--') > -1) {

                rule.walkDecls(function (decl, i) {
                    var property = decl.prop,
                        value = decl.value,
                        origRule = decl.parent,
                        ruleSelectors = origRule.selectors,
                        newRule;

                    // Background
                    if (property == 'bg-color') {
                        // add background-color styles
                        decl.cloneBefore({ prop: 'background',  value: value });

                        // Remove the original declaration
                        decl.remove();
                    }

                    // Text Color
                    if (property == 'text-color') {
                        // add background-color styles
                        decl.cloneBefore({ prop: 'color',  value: value });

                        // Remove the original declaration
                        decl.remove();
                    }

                    // Border Color
                    if (property == 'border-color') {
                        // add border-color styles
                        decl.cloneBefore({ prop: 'border-color',  value: value });

                        // Remove the original declaration
                        decl.remove();
                    }

                    // BG Hover Color
                    if (property == 'bg-hover-color') {

                        if (ruleScan !== '') {
                            ruleScan.append('background:' + value + ';');
                        } else {
                            ruleSelectors = ruleSelectors.map(function(ruleSelector){
                                return notificationRule + ':hover,\n' + notificationRule + ':active';
                            }).join(',\n');

                            newRule = origRule.cloneAfter({
                                selector: ruleSelectors
                            }).removeAll();

                            newRule.append('background:' + value + ';');

                            ruleScan = newRule;

                        }

                        // Remove the original declaration
                        decl.remove();
                    }


                    // Text Hover Color
                    if (property == 'text-hover-color') {

                        if (ruleScan !== '') {
                            ruleScan.append('color:' + value + ';');
                        } else {
                            ruleSelectors = ruleSelectors.map(function(ruleSelector){
                                return notificationRule + ':hover,\n' + notificationRule + ':active';
                            }).join(',\n');

                            newRule = origRule.cloneAfter({
                                selector: ruleSelectors
                            }).removeAll();

                            newRule.append('color:' + value + ';');

                            ruleScan = newRule;
                        }

                        // Remove the original declaration
                        decl.remove();
                    }

                    // Border Hover Color
                    if (property == 'border-hover-color') {

                        if (ruleScan !== '') {
                            ruleScan.append('border-color:' + value + ';');
                        } else {
                            ruleSelectors = ruleSelectors.map(function(ruleSelector){
                                return notificationRule + ':hover,\n' + notificationRule + ':active';
                            }).join(',\n');

                            newRule = origRule.cloneAfter({
                                selector: ruleSelectors
                            }).removeAll();

                            newRule.append('border-color:' + value + ';');

                            ruleScan = newRule;
                        }

                        // Remove the original declaration
                        decl.remove();
                    }

                });
            }
        });
    };
});