module.exports = ({ weight, height, system = 'dec' }) => (weight / (height * height)) * (system === 'dec' ? 1 : 703)