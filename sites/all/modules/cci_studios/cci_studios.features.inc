<?php
/**
 * @file
 * cci_studios.features.inc
 */

/**
 * Implements hook_views_api().
 */
function cci_studios_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function cci_studios_image_default_styles() {
  $styles = array();

  // Exported image style: client_logo.
  $styles['client_logo'] = array(
    'label' => 'Client Logo',
    'effects' => array(
      11 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 135,
          'height' => 100,
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: sample_thumb.
  $styles['sample_thumb'] = array(
    'label' => 'Sample Thumbnail',
    'effects' => array(
      10 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 600,
          'height' => 540,
          'upscale' => 0,
          'respectminimum' => 0,
          'onlyscaleifcrop' => 0,
          'style_name' => 'sample_thumb',
        ),
        'weight' => 0,
      ),
    ),
  );

  // Exported image style: team_member_bio.
  $styles['team_member_bio'] = array(
    'label' => 'Team Member Bio',
    'effects' => array(
      8 => array(
        'name' => 'manualcrop_crop',
        'data' => array(
          'width' => 1200,
          'height' => 560,
          'keepproportions' => 0,
          'style_name' => 'team_member_bio',
        ),
        'weight' => 0,
      ),
      9 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => '',
          'height' => 480,
          'upscale' => 0,
        ),
        'weight' => 2,
      ),
    ),
  );

  // Exported image style: team_member_thumb.
  $styles['team_member_thumb'] = array(
    'label' => 'Team Member Thumb',
    'effects' => array(
      1 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 484,
          'height' => 400,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 0,
          'style_name' => 'team_member_thumb',
        ),
        'weight' => 0,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function cci_studios_node_info() {
  $items = array(
    'careers' => array(
      'name' => t('Careers'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'client' => array(
      'name' => t('Client'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'culture_information' => array(
      'name' => t('Culture Information'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'page' => array(
      'name' => t('Basic page'),
      'base' => 'node_content',
      'description' => t('Use <em>basic pages</em> for your static content, such as an \'About us\' page.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'quote' => array(
      'name' => t('Quote'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('From'),
      'help' => '',
    ),
    'team_member' => array(
      'name' => t('Team Member'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Surname'),
      'help' => '',
    ),
    'work_sample' => array(
      'name' => t('Work Sample'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
