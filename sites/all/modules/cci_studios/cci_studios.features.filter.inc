<?php
/**
 * @file
 * cci_studios.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function cci_studios_filter_default_formats() {
  $formats = array();

  // Exported format: Full HTML.
  $formats['full_html'] = array(
    'format' => 'full_html',
    'name' => 'Full HTML',
    'cache' => 1,
    'status' => 1,
    'weight' => -10,
    'filters' => array(
      'filter_autop' => array(
        'weight' => -47,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_url' => array(
        'weight' => -46,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
    ),
  );

  return $formats;
}
