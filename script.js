// 메인 탭 기능 (버크앵무/사랑앵무)
const mainTabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

mainTabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // 모든 메인 탭 버튼 비활성화
        mainTabButtons.forEach(btn => btn.classList.remove('active'));
        // 클릭한 버튼 활성화
        button.classList.add('active');
        
        // 모든 탭 컨텐츠 숨기기
        tabContents.forEach(content => content.classList.remove('active'));
        // 해당 탭 컨텐츠 보이기
        document.getElementById(targetTab).classList.add('active');
        
        // 해당 탭의 첫 번째 하위 탭을 활성화
        const firstSubTab = document.querySelector(`#${targetTab} .sub-tab-btn`);
        if (firstSubTab) {
            firstSubTab.click();
        }
    });
});

// 하위 탭 기능 (일러스트/사진)
const subTabButtons = document.querySelectorAll('.sub-tab-btn');
const subTabContents = document.querySelectorAll('.sub-tab-content');

subTabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSubTab = button.getAttribute('data-subtab');
        
        // 같은 부모 안의 하위 탭 버튼만 비활성화
        const parentContainer = button.closest('.tab-content');
        const siblingButtons = parentContainer.querySelectorAll('.sub-tab-btn');
        siblingButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 같은 부모 안의 하위 탭 컨텐츠만 숨기기
        const siblingContents = parentContainer.querySelectorAll('.sub-tab-content');
        siblingContents.forEach(content => content.classList.remove('active'));
        document.getElementById(targetSubTab).classList.add('active');
    });
});

// 갤러리 아이템 클릭 효과
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // 클릭 효과 (필요시 확장 가능)
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = '';
        }, 150);
    });
});

// 페이지 로드 시 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
