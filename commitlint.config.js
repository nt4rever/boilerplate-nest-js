module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'init',
				'feat', // Tính năng mới
				'fix', // Sửa lỗi
				'improve', // Cải thiện code
				'refactor', // Tái cấu trúc code
				'docs', // Thêm tài liệu
				'chore', // Thay đổi nhỏ trong quá trình phát triển
				'style', // Sửa lỗi kiểu chữ, định dạng, không ảnh hưởng đến logic
				'test', // Viết test
				'revert', // Revert lại commit trước đó
				'ci', // Thay đổi cấu hình CI/CD
				'build', // Build tệp tin
			],
		],
		'type-case': [1, 'always', 'lower-case'],
		'type-empty': [1, 'never'],
		'scope-empty': [1, 'never'],
		'subject-empty': [1, 'never'],
		'subject-full-stop': [1, 'never', '.'],
		'header-max-length': [1, 'always', 72],
	},
};
