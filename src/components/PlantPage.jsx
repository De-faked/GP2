import React, { useState } from 'react';
import './PlantPage.css'; // Ensure this file is created for custom styles

const plants = [
  {
    name: 'Rose',
    scientific_name: 'Rosa',
    family: 'Rosaceae',
    origin: 'Asia, Europe, North America',
    care_instructions: 'Requires full sun. Water regularly, especially during dry periods.',
    image_url: 'https://plus.unsplash.com/premium_photo-1673716788461-0aa43e5d2015?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Roses are a symbol of love and passion. They come in various colors and sizes.'
  },
  {
    name: 'Sunflower',
    scientific_name: 'Helianthus annuus',
    family: 'Asteraceae',
    origin: 'North America',
    care_instructions: 'Needs full sun. Water when the soil is dry.',
    image_url: 'https://plus.unsplash.com/premium_photo-1676450471747-feb7c373b4ce?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sunflowers are known for their large, vibrant blooms that follow the sun.'
  },
  {
    name: 'Tulip',
    scientific_name: 'Tulipa',
    family: 'Liliaceae',
    origin: 'Central Asia',
    care_instructions: 'Plant in well-drained soil. Water sparingly during winter.',
    image_url: 'https://www.TBD.com/images/tulip.jpg',
    description: 'Tulips are popular spring flowers that come in many colors and shapes.'
  },
  {
    name: 'Orchid',
    scientific_name: 'Orchidaceae',
    family: 'Orchidaceae',
    origin: 'Tropical and subtropical regions worldwide',
    care_instructions: 'Needs indirect light. Keep the soil moist but not waterlogged.',
    image_url: 'https://www.TBD.com/images/orchid.jpg',
    description: 'Orchids are exotic flowers with intricate patterns and a wide range of colors.'
  },
  {
    name: 'Lily',
    scientific_name: 'Lilium',
    family: 'Liliaceae',
    origin: 'Northern Hemisphere',
    care_instructions: 'Requires full sun or partial shade. Keep the soil consistently moist.',
    image_url: 'https://www.TBD.com/images/lily.jpg',
    description: 'Lilies are elegant flowers that come in a variety of colors and sizes.'
  },
  {
    name: 'Daisy',
    scientific_name: 'Bellis perennis',
    family: 'Asteraceae',
    origin: 'Europe',
    care_instructions: 'Prefers full sun. Water when the soil is dry.',
    image_url: 'https://www.TBD.com/images/daisy.jpg',
    description: 'Daisies are cheerful flowers with a classic, simple look.'
  },
  {
    name: 'Violet',
    scientific_name: 'Viola',
    family: 'Violaceae',
    origin: 'Europe, Asia, North America',
    care_instructions: 'Grows well in partial shade. Keep soil moist but well-drained.',
    image_url: 'https://www.TBD.com/images/violet.jpg',
    description: 'Violets are small, delicate flowers known for their vibrant colors.'
  },
  {
    name: 'Iris',
    scientific_name: 'Iris germanica',
    family: 'Iridaceae',
    origin: 'Europe, North Africa, and Western Asia',
    care_instructions: 'Needs full sun. Water when the soil is dry.',
    image_url: 'https://www.TBD.com/images/iris.jpg',
    description: 'Irises have unique, intricate flowers and come in many shades.'
  },
  {
    name: 'Rose',
    scientific_name: 'Rosa',
    family: 'Rosaceae',
    origin: 'Asia, Europe, North America',
    care_instructions: 'Requires full sun. Water regularly, especially during dry periods.',
    image_url: 'TBDrose.jpg',
    description: 'Roses are a symbol of love and passion. They come in various colors and sizes.'
  },
  {
    name: 'Sunflower',
    scientific_name: 'Helianthus annuus',
    family: 'Asteraceae',
    origin: 'North America',
    care_instructions: 'Needs full sun. Water when the soil is dry.',
    image_url: 'TBDsunflower.jpg',
    description: 'Sunflowers are known for their large, vibrant blooms that follow the sun.'
  },
  {
    name: 'Tulip',
    scientific_name: 'Tulipa',
    family: 'Liliaceae',
    origin: 'Central Asia',
    care_instructions: 'Plant in well-drained soil. Water sparingly during winter.',
    image_url: 'TBDtulip.jpg',
    description: 'Tulips are popular spring flowers that come in many colors and shapes.'
  },
  {
    name: 'Orchid',
    scientific_name: 'Orchidaceae',
    family: 'Orchidaceae',
    origin: 'Tropical and subtropical regions worldwide',
    care_instructions: 'Needs indirect light. Keep the soil moist but not waterlogged.',
    image_url: 'TBDorchid.jpg',
    description: 'Orchids are exotic flowers with intricate patterns and a wide range of colors.'
  },
  {
    name: 'Lily',
    scientific_name: 'Lilium',
    family: 'Liliaceae',
    origin: 'Northern Hemisphere',
    care_instructions: 'Requires full sun or partial shade. Keep the soil consistently moist.',
    image_url: 'TBDlily.jpg',
    description: 'Lilies are elegant flowers that come in a variety of colors and sizes.'
  },
  {
    name: 'Daisy',
    scientific_name: 'Bellis perennis',
    family: 'Asteraceae',
    origin: 'Europe',
    care_instructions: 'Prefers full sun. Water when the soil is dry.',
    image_url: 'TBDdaisy.jpg',
    description: 'Daisies are cheerful flowers with a classic, simple look.'
  },
  {
    name: 'Violet',
    scientific_name: 'Viola',
    family: 'Violaceae',
    origin: 'Europe, Asia, North America',
    care_instructions: 'Grows well in partial shade. Keep soil moist but well-drained.',
    image_url: 'TBDviolet.jpg',
    description: 'Violets are small, delicate flowers known for their vibrant colors.'
  },
  {
    name: 'Iris',
    scientific_name: 'Iris germanica',
    family: 'Iridaceae',
    origin: 'Europe, North Africa, and Western Asia',
    care_instructions: 'Needs full sun. Water when the soil is dry.',
    image_url: 'TBDiris.jpg',
    description: 'Irises have unique, intricate flowers and come in many shades.'
  },
  {
    name: 'Cactus',
    scientific_name: 'Cactaceae',
    family: 'Cactaceae',
    origin: 'Americas',
    care_instructions: 'Requires full sun. Water sparingly.',
    image_url: 'TBDcactus.jpg',
    description: 'Cacti are succulent plants adapted to arid environments, known for their spines and unique shapes.'
  },
  {
    name: 'Fern',
    scientific_name: 'Polypodiopsida',
    family: 'Various',
    origin: 'Worldwide',
    care_instructions: 'Prefers indirect light and high humidity. Keep soil moist.',
    image_url: 'TBDfern.jpg',
    description: 'Ferns are ancient plants with feathery, green leaves that thrive in shaded, moist environments.'
  },
  {
    name: 'Basil',
    scientific_name: 'Ocimum basilicum',
    family: 'Lamiaceae',
    origin: 'Africa, Asia',
    care_instructions: 'Needs full sun. Water regularly but avoid waterlogging.',
    image_url: 'TBDbasil.jpg',
    description: 'Basil is a fragrant herb commonly used in cooking, particularly in Italian cuisine.'
  },
  {
    name: 'Mint',
    scientific_name: 'Mentha',
    family: 'Lamiaceae',
    origin: 'Europe, Asia',
    care_instructions: 'Thrives in full sun or partial shade. Keep soil moist.',
    image_url: 'TBDmint.jpg',
    description: 'Mint is a versatile herb known for its refreshing flavor and aroma.'
  },
  {
    name: 'Lavender',
    scientific_name: 'Lavandula',
    family: 'Lamiaceae',
    origin: 'Mediterranean',
    care_instructions: 'Requires full sun and well-drained soil. Water sparingly.',
    image_url: 'TBDlavender.jpg',
    description: 'Lavender is valued for its fragrant flowers and essential oils used in aromatherapy.'
  },
  {
    name: 'Aloe Vera',
    scientific_name: 'Aloe barbadensis miller',
    family: 'Asphodelaceae',
    origin: 'Arabian Peninsula',
    care_instructions: 'Needs bright, indirect light. Water sparingly.',
    image_url: 'TBDaloe_vera.jpg',
    description: 'Aloe Vera is known for its medicinal properties and soothing gel found in its leaves.'
  },
  {
    name: 'Spider Plant',
    scientific_name: 'Chlorophytum comosum',
    family: 'Asparagaceae',
    origin: 'South Africa',
    care_instructions: 'Prefers bright, indirect light. Keep soil moist but not waterlogged.',
    image_url: 'TBDspider_plant.jpg',
    description: 'Spider plants are popular houseplants known for their air-purifying qualities and arching leaves.'
  },
  {
    name: 'Pothos',
    scientific_name: 'Epipremnum aureum',
    family: 'Araceae',
    origin: 'French Polynesia',
    care_instructions: 'Thrives in low light. Water when the top inch of soil is dry.',
    image_url: 'TBDpothos.jpg',
    description: 'Pothos is a low-maintenance plant with trailing vines and heart-shaped leaves, ideal for indoor spaces.'
  },
  {
    name: 'ZZ Plant',
    scientific_name: 'Zamioculcas zamiifolia',
    family: 'Araceae',
    origin: 'East Africa',
    care_instructions: 'Tolerates low light. Water infrequently.',
    image_url: 'TBDzz_plant.jpg',
    description: 'ZZ Plants are known for their glossy, dark green leaves and tolerance of low light and drought.'
  },
  {
    name: 'Chinese Evergreen',
    scientific_name: 'Aglaonema',
    family: 'Araceae',
    origin: 'Asia',
    care_instructions: 'Prefers low to medium light. Keep soil moist but not soggy.',
    image_url: 'TBDchinese_evergreen.jpg',
    description: 'Chinese Evergreens are hardy plants with attractive foliage and ease of care.'
  },
  {
    name: 'Peace Lily',
    scientific_name: 'Spathiphyllum',
    family: 'Araceae',
    origin: 'Tropical Americas',
    care_instructions: 'Thrives in low to medium light. Keep soil consistently moist.',
    image_url: 'TBDpeace_lily.jpg',
    description: 'Peace Lilies are elegant houseplants known for their white blooms and air-purifying properties.'
  },
  {
    name: 'Bamboo Palm',
    scientific_name: 'Chamaedorea seifrizii',
    family: 'Arecaceae',
    origin: 'Central and South America',
    care_instructions: 'Prefers indirect light. Keep soil moist.',
    image_url: 'TBDbamboo_palm.jpg',
    description: 'Bamboo Palms add a tropical feel to indoor spaces and are excellent at removing indoor pollutants.'
  },
  {
    name: 'Geranium',
    scientific_name: 'Pelargonium',
    family: 'Geraniaceae',
    origin: 'South Africa',
    care_instructions: 'Needs full sun. Water when the soil is dry.',
    image_url: 'TBDgeranium.jpg',
    description: 'Geraniums are popular for their colorful flowers and are commonly grown in containers and gardens.'
  },
  {
    name: 'Begonia',
    scientific_name: 'Begonia',
    family: 'Begoniaceae',
    origin: 'Tropical and subtropical regions',
    care_instructions: 'Prefers indirect light. Keep soil moist.',
    image_url: 'TBDbegonia.jpg',
    description: 'Begonias are known for their beautiful foliage and vibrant flowers.'
  },
  {
    name: 'Jade Plant',
    scientific_name: 'Crassula ovata',
    family: 'Crassulaceae',
    origin: 'South Africa',
    care_instructions: 'Needs bright, indirect light. Water sparingly.',
    image_url: 'TBDjade_plant.jpg',
    description: 'Jade Plants are succulents with thick, glossy leaves and are considered symbols of good luck.'
  },
  {
    name: 'Ponytail Palm',
    scientific_name: 'Beaucarnea recurvata',
    family: 'Asparagaceae',
    origin: 'Mexico',
    care_instructions: 'Requires bright light. Water infrequently.',
    image_url: 'TBDponytail_palm.jpg',
    description: 'Ponytail Palms have a unique bulbous trunk and long, arching leaves resembling a ponytail.'
  },
  {
    name: 'Hibiscus',
    scientific_name: 'Hibiscus rosa-sinensis',
    family: 'Malvaceae',
    origin: 'Tropical regions',
    care_instructions: 'Needs full sun. Water regularly.',
    image_url: 'TBDhibiscus.jpg',
    description: 'Hibiscus plants are known for their large, colorful flowers and are often grown in tropical gardens.'
  },
  {
    name: 'Chamomile',
    scientific_name: 'Matricaria chamomilla',
    family: 'Asteraceae',
    origin: 'Europe, Western Asia',
    care_instructions: 'Requires full sun. Keep soil moist.',
    image_url: 'TBDchamomile.jpg',
    description: 'Chamomile is valued for its calming properties and is often used in herbal teas.'
  },
  {
    name: 'Thyme',
    scientific_name: 'Thymus vulgaris',
    family: 'Lamiaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Needs full sun. Water sparingly.',
    image_url: 'TBDthyme.jpg',
    description: 'Thyme is an aromatic herb used in cooking and has medicinal properties.'
  },
  {
    name: 'Rosemary',
    scientific_name: 'Rosmarinus officinalis',
    family: 'Lamiaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Requires full sun and well-drained soil. Water sparingly.',
    image_url: 'TBDrosemary.jpg',
    description: 'Rosemary is an aromatic herb with needle-like leaves and is used in cooking and aromatherapy.'
  },
  {
    name: 'Sage',
    scientific_name: 'Salvia officinalis',
    family: 'Lamiaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Needs full sun. Water when the soil is dry.',
    image_url: 'TBDsage.jpg',
    description: 'Sage is a culinary herb with gray-green leaves and a strong flavor used in various dishes.'
  },
  {
    name: 'Aloe Vera',
    scientific_name: 'Aloe barbadensis miller',
    family: 'Asphodelaceae',
    origin: 'Arabian Peninsula',
    care_instructions: 'Needs bright, indirect light. Water sparingly.',
    image_url: 'TBDaloe_vera.jpg',
    description: 'Aloe Vera is known for its medicinal properties and soothing gel found in its leaves.'
  },
  {
    name: 'Hoya',
    scientific_name: 'Hoya carnosa',
    family: 'Apocynaceae',
    origin: 'Australia, Southeast Asia',
    care_instructions: 'Thrives in bright, indirect light. Water when the top inch of soil is dry.',
    image_url: 'TBDhoya.jpg',
    description: 'Hoyas are known for their waxy, fragrant flowers and are easy to care for.'
  },
  {
    name: 'Kalanchoe',
    scientific_name: 'Kalanchoe blossfeldiana',
    family: 'Crassulaceae',
    origin: 'Madagascar',
    care_instructions: 'Needs bright light. Water sparingly.',
    image_url: 'TBDkalanchoe.jpg',
    description: 'Kalanchoes are succulents with vibrant, clustered flowers and are low-maintenance.'
  },
  {
    name: 'Grape Ivy',
    scientific_name: 'Cissus rhombifolia',
    family: 'Vitaceae',
    origin: 'South America',
    care_instructions: 'Prefers bright, indirect light. Water when soil is dry.',
    image_url: 'TBDgrape_ivy.jpg',
    description: 'Grape Ivy is a trailing plant with attractive, glossy leaves and is great for hanging baskets.'
  },
  {
    name: 'African Violet',
    scientific_name: 'Saintpaulia',
    family: 'Gesneriaceae',
    origin: 'Tanzania, Kenya',
    care_instructions: 'Needs bright, indirect light. Keep soil moist.',
    image_url: 'TBDafrican_violet.jpg',
    description: 'African Violets are popular for their beautiful, velvety leaves and colorful flowers.'
  },
  {
    name: 'Pilea',
    scientific_name: 'Pilea peperomioides',
    family: 'Urticaceae',
    origin: 'China',
    care_instructions: 'Thrives in bright, indirect light. Water when soil is dry.',
    image_url: 'TBDpilea.jpg',
    description: 'Pilea is known for its unique round leaves and easy care.'
  },
  {
    name: 'Cast Iron Plant',
    scientific_name: 'Aspidistra elatior',
    family: 'Asparagaceae',
    origin: 'Asia',
    care_instructions: 'Tolerates low light. Water when soil is dry.',
    image_url: 'TBDcast_iron_plant.jpg',
    description: 'Cast Iron Plants are hardy, low-maintenance plants that thrive in tough conditions.'
  },
  {
    name: 'Pothos',
    scientific_name: 'Epipremnum aureum',
    family: 'Araceae',
    origin: 'French Polynesia',
    care_instructions: 'Thrives in low light. Water when the top inch of soil is dry.',
    image_url: 'TBDpothos.jpg',
    description: 'Pothos is a low-maintenance plant with trailing vines and heart-shaped leaves, ideal for indoor spaces.'
  },
  {
    name: 'English Ivy',
    scientific_name: 'Hedera helix',
    family: 'Araliaceae',
    origin: 'Europe, Western Asia',
    care_instructions: 'Prefers indirect light. Keep soil moist.',
    image_url: 'TBDenglish_ivy.jpg',
    description: 'English Ivy is a versatile vine that can be used as a ground cover or in hanging baskets.'
  },
  {
    name: 'Basil',
    scientific_name: 'Ocimum basilicum',
    family: 'Lamiaceae',
    origin: 'Africa, Asia',
    care_instructions: 'Needs full sun. Water regularly but avoid waterlogging.',
    image_url: 'TBDbasil.jpg',
    description: 'Basil is a fragrant herb commonly used in cooking, particularly in Italian cuisine.'
  },
  {
    name: 'Mint',
    scientific_name: 'Mentha',
    family: 'Lamiaceae',
    origin: 'Europe, Asia',
    care_instructions: 'Thrives in full sun or partial shade. Keep soil moist.',
    image_url: 'TBDmint.jpg',
    description: 'Mint is a versatile herb known for its refreshing flavor and aroma.'
  },
  {
    name: 'Chives',
    scientific_name: 'Allium schoenoprasum',
    family: 'Amaryllidaceae',
    origin: 'Europe, Asia, North America',
    care_instructions: 'Needs full sun. Water regularly.',
    image_url: 'TBDchives.jpg',
    description: 'Chives are a mild onion-flavored herb commonly used in cooking.'
  },
  {
    name: 'Parsley',
    scientific_name: 'Petroselinum crispum',
    family: 'Apiaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Needs full sun or partial shade. Keep soil moist.',
    image_url: 'TBDparsley.jpg',
    description: 'Parsley is a widely used herb known for its fresh, vibrant flavor and culinary uses.'
  },
  {
    name: 'Oregano',
    scientific_name: 'Origanum vulgare',
    family: 'Lamiaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Requires full sun. Water sparingly.',
    image_url: 'TBDoregano.jpg',
    description: 'Oregano is a pungent herb used in various cuisines, especially Italian and Greek dishes.'
  },
  {
    name: 'Rosemary',
    scientific_name: 'Rosmarinus officinalis',
    family: 'Lamiaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Requires full sun and well-drained soil. Water sparingly.',
    image_url: 'TBDrosemary.jpg',
    description: 'Rosemary is an aromatic herb with needle-like leaves and is used in cooking and aromatherapy.'
  },
  {
    name: 'Thyme',
    scientific_name: 'Thymus vulgaris',
    family: 'Lamiaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Needs full sun. Water sparingly.',
    image_url: 'TBDthyme.jpg',
    description: 'Thyme is an aromatic herb used in cooking and has medicinal properties.'
  },
  {
    name: 'Chili Pepper',
    scientific_name: 'Capsicum annuum',
    family: 'Solanaceae',
    origin: 'South America',
    care_instructions: 'Needs full sun. Water when soil is dry.',
    image_url: 'TBDchili_pepper.jpg',
    description: 'Chili Peppers add spice and heat to dishes and are also used in sauces and seasoning.'
  },
  {
    name: 'Tomato',
    scientific_name: 'Solanum lycopersicum',
    family: 'Solanaceae',
    origin: 'South America',
    care_instructions: 'Requires full sun. Water regularly.',
    image_url: 'TBDtomato.jpg',
    description: 'Tomatoes are versatile fruits used in a variety of dishes and are easy to grow in gardens.'
  },
  {
    name: 'Cucumber',
    scientific_name: 'Cucumis sativus',
    family: 'Cucurbitaceae',
    origin: 'India',
    care_instructions: 'Needs full sun. Keep soil consistently moist.',
    image_url: 'TBDcucumber.jpg',
    description: 'Cucumbers are refreshing vegetables commonly used in salads and sandwiches.'
  },
  {
    name: 'Pumpkin',
    scientific_name: 'Cucurbita pepo',
    family: 'Cucurbitaceae',
    origin: 'North America',
    care_instructions: 'Needs full sun. Water regularly.',
    image_url: 'TBDpumpkin.jpg',
    description: 'Pumpkins are large, round fruits used in pies, soups, and decorations during fall.'
  },
  {
    name: 'Squash',
    scientific_name: 'Cucurbita',
    family: 'Cucurbitaceae',
    origin: 'Americas',
    care_instructions: 'Needs full sun. Keep soil consistently moist.',
    image_url: 'TBDsquash.jpg',
    description: 'Squash is a versatile vegetable that comes in many varieties and is used in numerous recipes.'
  },
  {
    name: 'Beet',
    scientific_name: 'Beta vulgaris',
    family: 'Amaranthaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDbeet.jpg',
    description: 'Beets are root vegetables known for their sweet flavor and are used in salads and soups.'
  },
  {
    name: 'Radish',
    scientific_name: 'Raphanus sativus',
    family: 'Brassicaceae',
    origin: 'Asia',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDradish.jpg',
    description: 'Radishes are crunchy root vegetables that add a peppery bite to salads and dishes.'
  },
  {
    name: 'Carrot',
    scientific_name: 'Daucus carota',
    family: 'Apiaceae',
    origin: 'Europe and Asia',
    care_instructions: 'Requires full sun. Keep soil consistently moist.',
    image_url: 'TBDcarrot.jpg',
    description: 'Carrots are popular root vegetables known for their sweetness and crunch.'
  },
  {
    name: 'Potato',
    scientific_name: 'Solanum tuberosum',
    family: 'Solanaceae',
    origin: 'South America',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDpotato.jpg',
    description: 'Potatoes are versatile tubers used in many dishes and can be grown in various climates.'
  },
  {
    name: 'Onion',
    scientific_name: 'Allium cepa',
    family: 'Amaryllidaceae',
    origin: 'Central Asia',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDonion.jpg',
    description: 'Onions are essential kitchen staples used in numerous recipes for their flavor and aroma.'
  },
  {
    name: 'Garlic',
    scientific_name: 'Allium sativum',
    family: 'Amaryllidaceae',
    origin: 'Central Asia',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDgarlic.jpg',
    description: 'Garlic is a pungent herb used in cooking and has various health benefits.'
  },
  {
    name: 'Lettuce',
    scientific_name: 'Lactuca sativa',
    family: 'Asteraceae',
    origin: 'Mediterranean region',
    care_instructions: 'Prefers cooler temperatures. Keep soil moist.',
    image_url: 'TBDlettuce.jpg',
    description: 'Lettuce is a leafy green vegetable commonly used in salads and sandwiches.'
  },
  {
    name: 'Spinach',
    scientific_name: 'Spinacia oleracea',
    family: 'Amaranthaceae',
    origin: 'Central and Western Asia',
    care_instructions: 'Needs full sun or partial shade. Keep soil moist.',
    image_url: 'TBDspinach.jpg',
    description: 'Spinach is a nutritious leafy green vegetable used in salads, smoothies, and various dishes.'
  },
  {
    name: 'Kale',
    scientific_name: 'Brassica oleracea',
    family: 'Brassicaceae',
    origin: 'Asia',
    care_instructions: 'Needs full sun or partial shade. Keep soil moist.',
    image_url: 'TBDkale.jpg',
    description: 'Kale is a leafy green vegetable known for its high nutrient content and versatility in cooking.'
  },
  {
    name: 'Arugula',
    scientific_name: 'Eruca sativa',
    family: 'Brassicaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Prefers cooler temperatures. Keep soil moist.',
    image_url: 'TBDarugula.jpg',
    description: 'Arugula is a peppery, leafy green often used in salads and as a garnish.'
  },
  {
    name: 'Collard Greens',
    scientific_name: 'Brassica oleracea',
    family: 'Brassicaceae',
    origin: 'Africa',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDcollard_greens.jpg',
    description: 'Collard Greens are leafy greens used in cooking and known for their hearty texture.'
  },
  {
    name: 'Swiss Chard',
    scientific_name: 'Beta vulgaris',
    family: 'Amaranthaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Needs full sun or partial shade. Keep soil moist.',
    image_url: 'TBDswiss_chard.jpg',
    description: 'Swiss Chard is a leafy green vegetable with colorful stems and a slightly bitter flavor.'
  },
  {
    name: 'Chili Pepper',
    scientific_name: 'Capsicum annuum',
    family: 'Solanaceae',
    origin: 'South America',
    care_instructions: 'Needs full sun. Water when soil is dry.',
    image_url: 'TBDchili_pepper.jpg',
    description: 'Chili Peppers add spice and heat to dishes and are also used in sauces and seasoning.'
  },
  {
    name: 'Cucumber',
    scientific_name: 'Cucumis sativus',
    family: 'Cucurbitaceae',
    origin: 'India',
    care_instructions: 'Needs full sun. Keep soil consistently moist.',
    image_url: 'TBDcucumber.jpg',
    description: 'Cucumbers are refreshing vegetables commonly used in salads and sandwiches.'
  },
  {
    name: 'Pumpkin',
    scientific_name: 'Cucurbita pepo',
    family: 'Cucurbitaceae',
    origin: 'North America',
    care_instructions: 'Needs full sun. Water regularly.',
    image_url: 'TBDpumpkin.jpg',
    description: 'Pumpkins are large, round fruits used in pies, soups, and decorations during fall.'
  },
  {
    name: 'Squash',
    scientific_name: 'Cucurbita',
    family: 'Cucurbitaceae',
    origin: 'Americas',
    care_instructions: 'Needs full sun. Keep soil consistently moist.',
    image_url: 'TBDsquash.jpg',
    description: 'Squash is a versatile vegetable that comes in many varieties and is used in numerous recipes.'
  },
  {
    name: 'Beet',
    scientific_name: 'Beta vulgaris',
    family: 'Amaranthaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDbeet.jpg',
    description: 'Beets are root vegetables known for their sweet flavor and are used in salads and soups.'
  },
  {
    name: 'Radish',
    scientific_name: 'Raphanus sativus',
    family: 'Brassicaceae',
    origin: 'Asia',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDradish.jpg',
    description: 'Radishes are crunchy root vegetables that add a peppery bite to salads and dishes.'
  },
  {
    name: 'Carrot',
    scientific_name: 'Daucus carota',
    family: 'Apiaceae',
    origin: 'Europe and Asia',
    care_instructions: 'Requires full sun. Keep soil consistently moist.',
    image_url: 'TBDcarrot.jpg',
    description: 'Carrots are popular root vegetables known for their sweetness and crunch.'
  },
  {
    name: 'Potato',
    scientific_name: 'Solanum tuberosum',
    family: 'Solanaceae',
    origin: 'South America',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDpotato.jpg',
    description: 'Potatoes are versatile tubers used in many dishes and can be grown in various climates.'
  },
  {
    name: 'Onion',
    scientific_name: 'Allium cepa',
    family: 'Amaryllidaceae',
    origin: 'Central Asia',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDonion.jpg',
    description: 'Onions are essential kitchen staples used in numerous recipes for their flavor and aroma.'
  },
  {
    name: 'Garlic',
    scientific_name: 'Allium sativum',
    family: 'Amaryllidaceae',
    origin: 'Central Asia',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDgarlic.jpg',
    description: 'Garlic is a pungent herb used in cooking and has various health benefits.'
  },
  {
    name: 'Lettuce',
    scientific_name: 'Lactuca sativa',
    family: 'Asteraceae',
    origin: 'Mediterranean region',
    care_instructions: 'Prefers cooler temperatures. Keep soil moist.',
    image_url: 'TBDlettuce.jpg',
    description: 'Lettuce is a leafy green vegetable commonly used in salads and sandwiches.'
  },
  {
    name: 'Spinach',
    scientific_name: 'Spinacia oleracea',
    family: 'Amaranthaceae',
    origin: 'Central and Western Asia',
    care_instructions: 'Needs full sun or partial shade. Keep soil moist.',
    image_url: 'TBDspinach.jpg',
    description: 'Spinach is a nutritious leafy green vegetable used in salads, smoothies, and various dishes.'
  },
  {
    name: 'Kale',
    scientific_name: 'Brassica oleracea',
    family: 'Brassicaceae',
    origin: 'Asia',
    care_instructions: 'Needs full sun or partial shade. Keep soil moist.',
    image_url: 'TBDkale.jpg',
    description: 'Kale is a leafy green vegetable known for its high nutrient content and versatility in cooking.'
  },
  {
    name: 'Arugula',
    scientific_name: 'Eruca sativa',
    family: 'Brassicaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Prefers cooler temperatures. Keep soil moist.',
    image_url: 'TBDarugula.jpg',
    description: 'Arugula is a peppery, leafy green often used in salads and as a garnish.'
  },
  {
    name: 'Collard Greens',
    scientific_name: 'Brassica oleracea',
    family: 'Brassicaceae',
    origin: 'Africa',
    care_instructions: 'Needs full sun. Keep soil moist.',
    image_url: 'TBDcollard_greens.jpg',
    description: 'Collard Greens are leafy greens used in cooking and known for their hearty texture.'
  },
  {
    name: 'Swiss Chard',
    scientific_name: 'Beta vulgaris',
    family: 'Amaranthaceae',
    origin: 'Mediterranean region',
    care_instructions: 'Needs full sun or partial shade. Keep soil moist.',
    image_url: 'TBDswiss_chard.jpg',
    description: 'Swiss Chard is a leafy green vegetable with colorful stems and a slightly bitter flavor.'
  }
];


const PlantPage = () => {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPlantData = () => {
    setLoading(true);
    setTimeout(() => {
      const randomPlant = plants[Math.floor(Math.random() * plants.length)];
      setPlant(randomPlant);
      setLoading(false);
    }, 500); 
  };

  return (
    <div className="plant-page">
      <header className="plant-header">
        <h1>Random Plant Information</h1>
      </header>
      <main className="plant-content">
        <button onClick={fetchPlantData} className="fetch-button">
          Get Random Plant Info
        </button>
        {loading && <p>Loading...</p>}
        {plant && (
          <div className="plant-info">
            <h2>{plant.name}</h2>
            <img src={plant.image_url} alt={plant.name} className="plant-image" />
            <p><strong>Scientific Name:</strong> {plant.scientific_name}</p>
            <p><strong>Family:</strong> {plant.family}</p>
            <p><strong>Origin:</strong> {plant.origin}</p>
            <p><strong>Care Instructions:</strong> {plant.care_instructions}</p>
            <p>{plant.description}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PlantPage;
