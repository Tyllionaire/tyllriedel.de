<?php
// rsce_boxes_config.php
return array(
    'label' => array('iFrame', 'iFrame Modul fŸr statischen Content'),
    'types' => array('content'),
    'contentCategory' => 'Tyllionaire',
    'fields' => array(
        'boxes' => array(
            'label' => array('iFrames', ''),
            'elementLabel' => '%s. iFrame',
            'inputType' => 'list',
            'fields' => array(
				'Link' => array(
					'label'  => array('Link zum Inhalt', 'http://...'),
					'inputType' => 'text',
				),
				'Name' => array(
					'label'  => array('Bezeichnung', ''),
					'inputType' => 'text',
				),
				'Width' => array(
					'label'  => array('Breite', ''),
					'inputType' => 'text',
				),
				'Height' => array(
					'label'  => array('H&ouml;he', ''),
					'inputType' => 'text',
				),
            ),
        ),
    ),
);